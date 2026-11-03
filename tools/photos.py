"""Resize every image in assets-src/photos into site/media/photos as WebP.
Run: python3 tools/photos.py   (needs Pillow). Writes <name>-640.webp and <name>-1280.webp
(never upscales) and prints a JSON map of intrinsic sizes for width/height attributes."""
import json, pathlib
from PIL import Image, ImageOps
root = pathlib.Path(__file__).resolve().parent.parent
src, out = root / "assets-src/photos", root / "site/media/photos"
out.mkdir(parents=True, exist_ok=True)
sizes = {}
for f in sorted(src.iterdir()):
    if f.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}: continue
    im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
    sizes[f.stem] = im.size
    for w in (640, 1280):
        if w > im.width and w != 640: continue
        tw = min(w, im.width)
        im.resize((tw, round(im.height * tw / im.width)), Image.LANCZOS).save(out / f"{f.stem}-{w}.webp", quality=80, method=6)
(root / "assets-src/photo-sizes.json").write_text(json.dumps(sizes, indent=1))
print(json.dumps(sizes))
