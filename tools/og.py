"""Builds site/media/og.jpg (1200x630 social preview). Run: python3 tools/og.py"""
import pathlib
from PIL import Image, ImageDraw, ImageFont, ImageOps
root = pathlib.Path(__file__).resolve().parent.parent
src = root / "assets-src/photos"
W, H = 1200, 630
img = Image.new("RGB", (W, H), "#f3ece0")
d = ImageDraw.Draw(img)
def font(name, size):
    for p in [f"/System/Library/Fonts/Supplemental/{name}", f"/Library/Fonts/{name}"]:
        try: return ImageFont.truetype(p, size)
        except OSError: pass
    return ImageFont.load_default()
serif, ital = font("Georgia.ttf", 92), font("Georgia Italic.ttf", 92)
small = font("Georgia.ttf", 30)
def polaroid(name, w, angle):
    im = ImageOps.exif_transpose(Image.open(src / name)).convert("RGB")
    im = ImageOps.fit(im, (w, int(w * 1.1)))
    framed = Image.new("RGB", (w + 24, int(w * 1.1) + 70), "#ebe2d2"); framed.paste(im, (12, 12))
    return framed.rotate(angle, expand=True, fillcolor="#f3ece0", resample=Image.BICUBIC)
for name, w, a, x, y in [("winnie-red-bird.jpg", 250, 5, 640, 60), ("winnie-manjama.jpg", 270, -4, 880, 150)]:
    p = polaroid(name, w, a); img.paste(p, (x, y))
d.text((70, 150), "Lester", font=serif, fill="#1e1a16")
d.text((70, 250), "&", font=ital, fill="#a3472a")
d.text((150, 250), "Winnie", font=serif, fill="#1e1a16")
d.text((74, 370), "B R A D F O R D", font=small, fill="#4a4239")
d.text((74, 450), "A forester and a physician,", font=small, fill="#4a4239")
d.text((74, 490), "in service around the world.", font=small, fill="#4a4239")
d.rectangle([0, H - 14, W, H], fill="#24402f")
img.save(root / "site/media/og.jpg", quality=86)
print("ok")
