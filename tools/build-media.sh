#!/usr/bin/env bash
# Build the web media library from the Google Drive originals.
#
#   ./tools/build-media.sh [images|videos|all]
#
# Originals live in the KIJA shared drive and are NOT in this repo. This script
# turns them into the optimised files under img/ and video/ that the site ships.
# Re-run it when new originals land; it is idempotent.
#
# Each source file maps to a semantic name (see MAP below) so pages reference
# img/bishop-class-window.jpg rather than "OCP Bishop (3).jpg".
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DRIVE="/Users/kieljared/Library/CloudStorage/GoogleDrive-kiel@kijacreative.com/Shared drives/KIJA CREATIVE/KIJA TOP-LEVEL/02_CLIENTS/OCP/Videos"
SRC_IMG="$DRIVE/Website Images"
SRC_VID="$DRIVE/Website Videos"
OUT_IMG="$ROOT/img"
OUT_VID="$ROOT/video"

FFMPEG="${FFMPEG:-$(command -v ffmpeg || echo "$ROOT/work/ffmpeg-8.1.2/ffmpeg")}"

# ── source basename → published slug ─────────────────────────────────────────
# Landscape sources are 1920x1080, portrait are 1080x1350.
read -r -d '' MAP <<'EOF' || true
First Pilates in the Park|park-first-class
Kiel & Amanda - 5 Years Later|founders-mural
Kiel and Amanda|founders-storefront
OCP Bishop (2)|bishop-straps
OCP Bishop (3)|bishop-class-window
OCP Bishop (4)|bishop-team-neon
OCP Bishop (5)|bishop-instructor-magenta
OCP Bishop (6)|bishop-instructor-cue
OCP Bishop (7)|bishop-instructor-teal
OCP Bishop (8)|bishop-stretch-neon
OCP Bishop (9)|bishop-reformer-window
OCP Bishop Interior (2)|bishop-interior-group
OCP Bishop Interior|bishop-interior-empty
OCP Bishop Sign (2)|bishop-exterior-trees
OCP Bishop Sign (3)|bishop-exterior-sign
OCP Bishop Sign|bishop-exterior-window
OCP Bishop Team|team-bishop-exterior
OCP Bishop|bishop-laughing-weights
OCP Lower Greenville (2)|lg-reformer-warm
OCP Lower Greenville (3)|lg-class-golden
OCP Lower Greenville (4)|lg-reformer-curtain
OCP Lower Greenville (5)|lg-studio-bright
OCP Lower Greenville (6)|lg-class-windows
OCP Lower Greenville (7)|lg-class-arches
OCP Lower Greenville - Retail|lg-retail
OCP Lower Greenville - Sign|lg-exterior-sign
OCP Lower Greenville|lg-instructors
OCP Privates (2)|privates-tower
OCP Privates|privates-neon
OCP Uptown  Sign|uptown-awning-letters
OCP Uptown (2)|uptown-class-neon
OCP Uptown (3)|uptown-reformers
OCP Uptown (4)|uptown-instructor-medusa
OCP Uptown (5)|uptown-room-neon
OCP Uptown (6)|uptown-motion
OCP Uptown (7)|uptown-skyline-team
OCP Uptown (8)|uptown-reformer-medusa
OCP Uptown Sign|uptown-window-decal
OCP Uptown|uptown-arms-overhead
Pilates in the Park (2)|park-group
Pilates in the Park|park-lawn
Private Parties - Champaign|parties-champagne
Private Parties - SMU|parties-smu
Private Parties|parties-studio
Scooter|scooter
EOF

read -r -d '' VMAP <<'EOF' || true
OCP Uptown - Video|uptown-wide
OCPA|academy
Private Parties - Video|parties
OCP Bishop - Video|bishop-1
OCP Bishop - Video (2)|bishop-2
OCP Bishop - Video (3)|bishop-3
OCP Bishop - Video (4)|bishop-4
OCP Bishop Springs - Video|bishop-springs
OCP Springs|springs
OCP Lower Greenville - Video|lg-1
OCP Lower Greenville - Video (2)|lg-2
OCP Lower Greenville - Video (3)|lg-3
OCP Lower Greenville - Video (4)|lg-4
OCP Uptown - Video (2)|uptown-2
OCP Uptown - Video (3)|uptown-3
OCP Uptown - Video (4)|uptown-4
OCP Uptown - Video (5)|uptown-5
OCP Uptown - Video (6)|uptown-6
EOF

build_images() {
  mkdir -p "$OUT_IMG/lib"
  while IFS='|' read -r base slug; do
    [ -z "$base" ] && continue
    src="$SRC_IMG/$base.jpg"
    if [ ! -f "$src" ]; then echo "MISSING: $base.jpg" >&2; continue; fi
    w=$(sips -g pixelWidth "$src" | tail -1 | tr -dc 0-9)
    h=$(sips -g pixelHeight "$src" | tail -1 | tr -dc 0-9)
    if [ "$w" -ge "$h" ]; then full=1600; else full=1080; fi
    sips -Z "$full" -s format jpeg -s formatOptions 80 "$src" --out "$OUT_IMG/lib/$slug.jpg" >/dev/null
    sips -Z 640    -s format jpeg -s formatOptions 78 "$src" --out "$OUT_IMG/lib/$slug@640.jpg" >/dev/null
    printf "%-28s %sx%s -> %s\n" "$slug" "$w" "$h" "$(du -h "$OUT_IMG/lib/$slug.jpg" | cut -f1)"
  done <<< "$MAP"
}

# Hero-grade loop: silent, short, heavily compressed — it sits behind a scrim.
build_hero() {
  "$FFMPEG" -nostdin -v error -y -ss 2 -t 14 -i "$SRC_VID/OCP Uptown - Video.mp4" \
    -an -vf "scale=1600:-2,fps=25" -c:v libx264 -profile:v high -crf 30 \
    -preset slow -pix_fmt yuv420p -movflags +faststart "$OUT_VID/hero.mp4"
  "$FFMPEG" -nostdin -v error -y -ss 2 -t 14 -i "$SRC_VID/OCP Uptown - Video.mp4" \
    -an -vf "scale=1600:-2,fps=25" -c:v libvpx-vp9 -crf 40 -b:v 0 -row-mt 1 \
    -deadline good -cpu-used 3 "$OUT_VID/hero.webm"
  "$FFMPEG" -nostdin -v error -y -ss 4 -i "$SRC_VID/OCP Uptown - Video.mp4" -frames:v 1 \
    -vf "scale=1600:-2" -q:v 6 "$OUT_IMG/hero-poster.jpg"
}

# Library clips: silent, web-sized, for section backgrounds on future pages.
build_videos() {
  mkdir -p "$OUT_VID/lib"
  while IFS='|' read -r base slug; do
    [ -z "$base" ] && continue
    src="$SRC_VID/$base.mp4"
    if [ ! -f "$src" ]; then echo "MISSING: $base.mp4" >&2; continue; fi
    "$FFMPEG" -nostdin -v error -y -t 20 -i "$src" -an \
      -vf "scale='min(1280,iw)':-2,fps=25" -c:v libx264 -profile:v high -crf 30 \
      -preset medium -pix_fmt yuv420p -movflags +faststart "$OUT_VID/lib/$slug.mp4"
    "$FFMPEG" -nostdin -v error -y -ss 1 -i "$src" -frames:v 1 \
      -vf "scale='min(1280,iw)':-2" -q:v 6 "$OUT_VID/lib/$slug-poster.jpg"
    printf "%-18s -> %s\n" "$slug" "$(du -h "$OUT_VID/lib/$slug.mp4" | cut -f1)"
  done <<< "$VMAP"
}

case "${1:-all}" in
  images) build_images ;;
  hero)   build_hero ;;
  videos) build_hero; build_videos ;;
  all)    build_images; build_hero; build_videos ;;
  *) echo "usage: $0 [images|hero|videos|all]" >&2; exit 1 ;;
esac
