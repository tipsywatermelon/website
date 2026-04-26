#!/usr/bin/env python3
"""Generate placeholder PNG images for tinydisco website (no dependencies)."""
import struct, zlib, os

def make_png(path, width, height, color):
    def chunk(name, data):
        crc = zlib.crc32(name + data) & 0xffffffff
        return struct.pack('>I', len(data)) + name + data + struct.pack('>I', crc)
    ihdr = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    raw = b''.join(b'\x00' + bytes(color) * width for _ in range(height))
    png = b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b'')
    os.makedirs(os.path.dirname(path) if os.path.dirname(path) else '.', exist_ok=True)
    with open(path, 'wb') as f:
        f.write(png)
    print(f'  Created {path}')

images = [
    ('images/hero.png',  1920, 800, (18, 18, 18)),
    ('images/about.png', 800,  600, (22, 22, 22)),
    ('images/booth.png', 600,  600, (26, 26, 26)),
]
for i in range(1, 9):
    shade = 20 + i * 2
    images.append((f'images/gallery-{i:02d}.png', 600, 600, (shade, shade, shade)))

for path, w, h, c in images:
    make_png(path, w, h, c)
print('Done.')
