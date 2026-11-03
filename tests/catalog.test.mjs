import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
const root = process.cwd();
const catalogPath = join(root, "src/data/assets.json");
test("catalog accounts for every original artwork with usable local display assets", () => {
  assert.ok(existsSync(catalogPath), "asset catalog must be generated");
  const assets = JSON.parse(readFileSync(catalogPath, "utf8"));
  const walk = (dir) =>
    readdirSync(dir).flatMap((name) => {
      const p = join(dir, name);
      return statSync(p).isDirectory() ? walk(p) : [p];
    });
  const originals = walk(join(root, "public/works")).filter((p) =>
    /\.(png|jpe?g|webp|mp4)$/i.test(p),
  );
  assert.equal(assets.length, originals.length);
  assert.equal(new Set(assets.map((a) => a.original)).size, assets.length);
  for (const a of assets) {
    assert.ok(existsSync(join(root, "public", a.original)), a.original);
    assert.ok(existsSync(join(root, "public", decodeURI(a.src))), a.src);
    assert.ok(a.width > 0 && a.height > 0);
    assert.ok(a.category && a.title);
    assert.ok(!a.src.includes(" "), "display URL must be encoded");
    if (a.kind === "image") {
      assert.ok(a.width <= 1600 && a.height <= 1600);
      assert.ok(existsSync(join(root, "public", a.thumbnail)));
      assert.ok(statSync(join(root, "public", a.src)).size < 900_000);
    } else {
      assert.ok(a.poster && existsSync(join(root, "public", a.poster)));
    }
  }
});
