"""Resize every image in assets-src/photos into site/media/photos as WebP.
Run: python3 tools/photos.py   (needs Pillow). Writes <name>-640.webp and <name>-1280.webp
(never upscales) and prints a JSON map of intrinsic sizes for width/height attributes.
Edge trims (to cut scanner borders and black lines) are read from assets-src/crops.json.
An entry there may also set "descreen" (Gaussian blur radius, applied at full size to melt
the dither of a halftone scan) and "sharpen" ([radius, percent, threshold] unsharp mask,
applied after resizing)."""
import json, pathlib
from PIL import Image, ImageFilter, ImageOps
root = pathlib.Path(__file__).resolve().parent.parent
src, out = root / "assets-src/photos", root / "site/media/photos"
out.mkdir(parents=True, exist_ok=True)
crops = json.loads((root / "assets-src/crops.json").read_text())
sizes = {}
for f in sorted(src.iterdir()):
    if f.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}: continue
    im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
    c = crops.get(f.stem)
    if c: im = im.crop((c["left"], c["top"], im.width - c["right"], im.height - c["bottom"]))
    if c and c.get("descreen"): im = im.filter(ImageFilter.GaussianBlur(c["descreen"]))
    sizes[f.stem] = im.size
    for w in (640, 1280):
        if w > im.width and w != 640: continue
        tw = min(w, im.width)
        r = im.resize((tw, round(im.height * tw / im.width)), Image.LANCZOS)
        if c and c.get("sharpen"): r = r.filter(ImageFilter.UnsharpMask(*c["sharpen"]))
        r.save(out / f"{f.stem}-{w}.webp", quality=80, method=6)
(root / "assets-src/photo-sizes.json").write_text(json.dumps(sizes, indent=1))
print(json.dumps(sizes))
