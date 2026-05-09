# Color Retheme: Sand & Forest

**Date:** 2026-05-09  
**Status:** Approved

## Summary

Replace the current white/yellow color theme with a warm, earthy Sand & Forest palette inspired by the Snap & Soul brand board. The change touches two files: `css/theme.css` (all color tokens) and `css/button.css` (sparkle button background). All pages inherit the new theme automatically through existing utility classes — no HTML changes required.

## Color Palette

| Name | Hex | Role |
|---|---|---|
| Forest | `#304737` | Nav background, primary CTA button bg |
| Sage | `#6B7F6D` | Secondary text, nav links |
| Blush | `#D28A7A` | Borders |
| Marigold | `#D9A441` | Accent color, CTA text (replaces yellow) |
| Dusk Blue | `#4B5D6D` | Reserved — not used in initial pass |
| Mauve | `#B98FA7` | Reserved — not used in initial pass |
| Sand | `#E8D4BB` | Page base background |
| Charcoal | `#1C1C1E` | Primary text, accent-text |

## Token Changes — `css/theme.css`

| CSS Variable | Before | After |
|---|---|---|
| `--color-bg` | `#ffffff` | `#E8D4BB` |
| `--color-bg-section` | `#f5f5f5` | `#F0E2CA` |
| `--color-bg-card` | `#ebebeb` | `#FAF4EC` |
| `--color-bg-nav` | `rgba(255,255,255,0.95)` | `#304737` |
| `--color-border` | `#dddddd` | `#D28A7A` |
| `--color-text-primary` | `#111111` | `#1C1C1E` |
| `--color-text-secondary` | `#666666` | `#6B7F6D` |
| `--color-accent` | `#f5c800` | `#D9A441` |
| `--color-accent-text` | `#111111` | `#1C1C1E` |

## Button Change — `css/button.css`

The `.sparkle-btn` background changes from `#111111` (black) to `#304737` (Forest). The `--color` variable already inherits from `--color-accent`, so the text/glare color updates automatically to Marigold.

## Scope

- **In scope:** `css/theme.css`, `css/button.css`
- **Out of scope:** HTML structure, fonts, layout, Tailwind config, JS
- **Deferred:** Dusk Blue and Mauve are not assigned to any role yet — available for future accent work

## Visual Impact

The most noticeable change on every page is the nav bar switching from translucent white to solid Forest green. The page body shifts from cool white to warm sand. Borders become soft blush instead of gray. The CTA button shifts from black/yellow to forest/marigold — similar energy, warmer feel.
