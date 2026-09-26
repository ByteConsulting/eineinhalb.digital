from pathlib import Path
import base64

png_path = Path(r"c:\Users\Daniel\git\eineinhalb.digital\public\brand\logo.png")
svg_path = Path(r"c:\Users\Daniel\git\eineinhalb.digital\public\brand\logo.svg")
b64 = base64.b64encode(png_path.read_bytes()).decode("ascii")
svg = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 302" width="612" height="302" role="img" aria-label="eineinhalb Digital">
  <title>eineinhalb Digital</title>
  <image width="612" height="302" href="data:image/png;base64,{b64}"/>
</svg>
"""
svg_path.write_text(svg, encoding="utf-8")
print(f"wrote {svg_path} ({svg_path.stat().st_size} bytes)")
