#!/usr/bin/env bash
# Renders the $59 Offer ad set (ads/59-offer/index.html) to upload-ready MP4s.
#
#   tools/render-ads.sh          → ads/59-offer/out/ocp-59-offer-{1080x1080,1080x1350,1080x1920}.mp4
#
# Each frame's type and gradient are screenshotted by headless Chrome from
# index.html?render=<size> (transparent, no video), then composited by ffmpeg
# over the full-quality Drive original with the same crop and grade the page's
# CSS applies. Grain is ffmpeg temporal noise, standing in for the CSS overlay.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
AD="$ROOT/ads/59-offer"
OUT="$AD/out"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SRC_VID="/Users/kieljared/Library/CloudStorage/GoogleDrive-kiel@kijacreative.com/Shared drives/KIJA CREATIVE/KIJA TOP-LEVEL/02_CLIENTS/OCP/Videos/Website Videos"
MAX_SECONDS=15

mkdir -p "$OUT"

# size | Drive original | object-position y | contrast | saturate | brightness
FRAMES=(
  "1080x1080|OCP Bishop - Video (2)|0.42|1.10|0.95|1.02"
  "1080x1350|OCP Uptown - Video (2)|0.38|1.08|0.95|0.98"
  "1080x1920|OCP Lower Greenville - Video (2)|0.44|1.08|0.95|0.98"
)

for row in "${FRAMES[@]}"; do
  IFS='|' read -r size src posy con sat bri <<<"$row"
  w="${size%x*}"; h="${size#*x}"
  overlay="$OUT/overlay-$size.png"
  mp4="$OUT/ocp-59-offer-$size.mp4"

  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
    --default-background-color=00000000 --force-device-scale-factor=1 \
    --window-size="$w,$h" --virtual-time-budget=8000 \
    --screenshot="$overlay" "file://$AD/index.html?render=$size" 2>/dev/null

  ffmpeg -nostdin -v error -y -i "$SRC_VID/$src.mp4" -i "$overlay" -filter_complex "\
    [0:v]scale=$w:$h:force_original_aspect_ratio=increase:flags=lanczos,\
    crop=$w:$h:(iw-$w)/2:(ih-$h)*$posy,\
    eq=contrast=$con:saturation=$sat,\
    colorchannelmixer=rr=$bri:gg=$bri:bb=$bri,fps=30[v];\
    [v][1:v]overlay=0:0,noise=alls=3:allf=t,format=yuv420p[out]" \
    -map "[out]" -an -t "$MAX_SECONDS" \
    -c:v libx264 -profile:v high -preset slow -crf 19 -maxrate 12M -bufsize 24M -movflags +faststart "$mp4"

  echo "$mp4  $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$mp4")s  $(du -h "$mp4" | cut -f1)"
done
