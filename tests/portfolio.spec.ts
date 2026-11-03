import { test, expect } from "@playwright/test";

test("portfolio presents approved content, complete work categories, and controlled videos", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Portfolio",
  );
  await expect(
    page.getByRole("heading", { name: "Little Heirloom", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Pawerhouse", exact: true }),
  ).toBeAttached();
  await expect(
    page.getByRole("heading", { name: "Yo-Gu Star", exact: true }),
  ).toBeAttached();
  await expect(
    page.getByText(
      "Every project is an opportunity to tell a story through type, color, and form.",
      { exact: false },
    ),
  ).toBeAttached();
  await expect(
    page.locator('a[href="mailto:dfailanga.dfx@gmail.com"]').first(),
  ).toBeAttached();
  await expect(page.locator("#archive .work-button")).toHaveCount(109);
  await expect(page.locator("#motion video")).toHaveCount(10);
  for (const video of await page.locator("video").all()) {
    await expect(video).toHaveAttribute("controls", "");
    expect(await video.getAttribute("autoplay")).toBeNull();
    expect(await video.getAttribute("poster")).toBeTruthy();
    await expect(video).toHaveAttribute("preload", "none");
  }
  await page
    .getByRole("button", { name: "Print Materials 9", exact: true })
    .click();
  await expect(page.locator("#archive .work-button")).toHaveCount(9);
  await page.getByRole("button", { name: "Pubmats 28", exact: true }).click();
  await page.getByRole("button", { name: "Events", exact: true }).click();
  await expect(page.locator("#archive .work-button")).toHaveCount(9);
  await page.getByRole("button", { name: "All work 109", exact: true }).click();
  await expect(page.locator("#archive .work-button")).toHaveCount(109);
  expect(errors).toEqual([]);
});

test("image viewer supports keyboard navigation, dismissal and focus restoration", async ({
  page,
}) => {
  await page.goto("/");
  const first = page.locator("#archive .work-button").first();
  await first.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  const initial = await dialog.locator("img").getAttribute("src");
  await page.keyboard.press("ArrowRight");
  await expect(dialog.locator("img")).not.toHaveAttribute("src", initial!);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(first).toBeFocused();
});

test("mobile and reduced motion keep content readable without horizontal overflow", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [390, 768, 1024, 1400]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page
        .locator(".hero-title")
        .evaluate((el) => Number(getComputedStyle(el).opacity)),
    ).toBe(1);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "reference/qa/mobile.png", fullPage: true });
});

test("desktop composition has no failed image requests and motion can be paused", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto("/");
  await page.getByRole("button", { name: "Pause motion", exact: true }).click();
  await expect(page.locator("#portfolio")).toHaveAttribute(
    "data-motion",
    "paused",
  );
  await expect(
    page.getByRole("button", { name: "Resume motion", exact: true }),
  ).toBeVisible();
  await page.waitForTimeout(1300);
  expect(
    await page
      .locator(".hero img")
      .evaluateAll((imgs) =>
        imgs.every(
          (img) =>
            (img as HTMLImageElement).complete &&
            (img as HTMLImageElement).naturalWidth > 0,
        ),
      ),
  ).toBe(true);
  await page.screenshot({ path: "reference/qa/desktop.png", fullPage: true });
});

test("explicit pause survives changes to the system motion preference", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Pause motion", exact: true }).click();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.waitForTimeout(1900);
  const before = await page
    .locator(".hero-float")
    .first()
    .evaluate((el) => getComputedStyle(el).transform);
  await page.waitForTimeout(500);
  const after = await page
    .locator(".hero-float")
    .first()
    .evaluate((el) => getComputedStyle(el).transform);
  expect(after).toBe(before);
  await expect(
    page.getByRole("button", { name: "Resume motion", exact: true }),
  ).toBeVisible();
});

test("all supplied videos have browser-playable metadata", async ({ page }) => {
  test.setTimeout(90_000);
  await page.goto("/");
  for (const video of await page.locator("#motion video").all()) {
    const result = await video.evaluate(
      (element: HTMLVideoElement) =>
        new Promise<{ width: number; duration: number }>((resolve, reject) => {
          const timer = setTimeout(
            () => reject(new Error("Video metadata timed out")),
            15_000,
          );
          element.onloadedmetadata = () => {
            clearTimeout(timer);
            resolve({ width: element.videoWidth, duration: element.duration });
          };
          element.onerror = () => {
            clearTimeout(timer);
            reject(new Error(element.error?.message || "Video failed to load"));
          };
          element.load();
        }),
    );
    expect(result.width).toBeGreaterThan(0);
    expect(result.duration).toBeGreaterThan(0);
  }
});

test("scroll reveals reverse above their trigger and replay on the next descent", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("#about [data-reveal]")).toHaveCSS("opacity", "0");
  for (const selector of ["#about [data-reveal]", ".chapter-card"]) {
    const element = page.locator(selector).first();
    for (let pass = 0; pass < 2; pass++) {
      await element.evaluate((el) =>
        el.scrollIntoView({ behavior: "instant", block: "center" }),
      );
      await expect(element).toHaveCSS("opacity", "1");
      const settledTransform = await element.evaluate(
        (el) => getComputedStyle(el).transform,
      );
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      await expect(element).toHaveCSS("opacity", "0");
      await element.evaluate((el) =>
        el.scrollIntoView({ behavior: "instant", block: "center" }),
      );
      await expect(element).toHaveCSS("opacity", "1");
      await expect(element).toHaveCSS("transform", settledTransform);
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  }
});

test("mobile collages scale with the viewport and keep clear space after text", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const heights: number[] = [];
  for (const width of [360, 390, 540, 700]) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    const metrics = await page
      .locator(".identity-spread")
      .evaluateAll((sections) =>
        sections.map((section) => {
          const copy = section
            .querySelector(".identity-copy")!
            .getBoundingClientRect();
          const art = section
            .querySelector(".identity-collage")!
            .getBoundingClientRect();
          const link = section
            .querySelector(".spread-link")!
            .getBoundingClientRect();
          return {
            ratio: art.height / art.width,
            textGap: art.top - copy.bottom,
            linkGap: link.top - art.bottom,
            height: art.height,
          };
        }),
      );
    for (const metric of metrics) {
      expect(metric.ratio).toBeGreaterThan(0.8);
      expect(metric.ratio).toBeLessThan(1.15);
      expect(metric.textGap).toBeGreaterThanOrEqual(24);
      expect(metric.textGap).toBeLessThanOrEqual(64);
      expect(metric.linkGap).toBeGreaterThanOrEqual(12);
    }
    heights.push(metrics[0].height);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  expect(heights[3] - heights[0]).toBeGreaterThan(200);
});
