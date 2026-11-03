from pathlib import Path
from PIL import Image, ImageOps
import hashlib, json, re, subprocess, sys
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.tools'))
Image.MAX_IMAGE_PIXELS = 300_000_000
OUTPUT = ROOT / 'public/optimized/works'
OUTPUT.mkdir(parents=True, exist_ok=True)
assets = []
for path in sorted((ROOT / 'public/works').rglob('*')):
    if path.suffix.lower() not in {'.png', '.jpg', '.jpeg', '.webp', '.mp4'}:
        continue
    relative = path.relative_to(ROOT / 'public').as_posix()
    parts = path.relative_to(ROOT / 'public/works').parts
    key = hashlib.sha1(relative.encode()).hexdigest()[:12]
    title = path.stem.replace('_', ' ')
    if title.isdigit():
        title = f'{parts[0]} / Design {int(title):02}'
    if title.startswith('ChatGPT Image') or re.fullmatch(r'[0-9a-f-]{32,}', title):
        title = f'{parts[0]} / Mockup'
    item = dict(id=key, original=relative, category=parts[0], subcategory=parts[1] if len(parts)>2 else '', title=title)
    if path.suffix.lower() == '.mp4':
        import imageio_ffmpeg
        poster = OUTPUT / f'{key}-poster.webp'
        if not poster.exists():
            result = subprocess.run([imageio_ffmpeg.get_ffmpeg_exe(), '-v', 'error', '-ss', '1', '-i', str(path), '-frames:v', '1', '-vf', 'scale=960:960:force_original_aspect_ratio=decrease', '-y', str(poster)], capture_output=True, text=True)
            if result.returncode:
                raise RuntimeError(f'Poster generation failed for {path.name}: {result.stderr}')
        with Image.open(poster) as im:
            width, height = im.size
        item.update(kind='video', src='/' + quote(relative), poster='/optimized/works/' + poster.name, width=width, height=height)
    else:
        full = OUTPUT / f'{key}.webp'
        thumb = OUTPUT / f'{key}-thumb.webp'
        if not full.exists() or not thumb.exists():
            with Image.open(path) as source:
                im = ImageOps.exif_transpose(source)
                im.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
                if im.mode not in ['RGB', 'RGBA']:
                    im = im.convert('RGBA' if 'transparency' in im.info else 'RGB')
                im.save(full, 'WEBP', quality=84, method=5)
                im.thumbnail((640, 640), Image.Resampling.LANCZOS)
                im.save(thumb, 'WEBP', quality=80, method=5)
        with Image.open(full) as im:
            width, height = im.size
        item.update(kind='image', src='/optimized/works/' + full.name, thumbnail='/optimized/works/' + thumb.name, width=width, height=height)
    assets.append(item)
(ROOT / 'src/data/assets.json').write_text(json.dumps(assets, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
assert len(assets) == len({a['original'] for a in assets})
print(f'Prepared {len(assets)} works; originals preserved. Display assets: {sum(p.stat().st_size for p in OUTPUT.iterdir())/1024/1024:.1f} MB')
