"""Adds/updates width & height on every <img> in site/*.html that points at a local raster,
so the browser can reserve space (no layout shift). Run after adding images: python3 tools/dims.py"""
import pathlib, re
from PIL import Image
root = pathlib.Path(__file__).resolve().parent.parent / "site"
for html in root.glob("*.html"):
    s = html.read_text()
    def fix(m):
        tag = m.group(0)
        src = re.search(r'\ssrc="([^"]+)"', tag)
        if not src or src.group(1).startswith(("http", "data:")) or src.group(1).endswith(".svg"): return tag
        f = root / src.group(1)
        if not f.exists(): print("MISSING", f); return tag
        w, h = Image.open(f).size
        tag = re.sub(r'\s(width|height)="\d+"', "", tag)
        return tag.replace("<img", f'<img width="{w}" height="{h}"', 1)
    s2 = re.sub(r"<img\b[^>]*>", fix, s)
    if s2 != s: html.write_text(s2); print("updated", html.name)
