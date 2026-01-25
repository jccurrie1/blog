# Photos Section

This directory contains images for the photo gallery at `/photos`.

## Adding Photos

Simply drop image files into this directory. Supported formats:
- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.gif`

Photos are automatically discovered at build time - no configuration needed.

## File Naming

File names are converted to alt text for accessibility:
- Dashes and underscores become spaces
- Leading numbers are stripped
- File extension is removed

Examples:
- `sunset-at-beach.jpg` → "sunset at beach"
- `01-mountain-hike.jpg` → "mountain hike"
- `coffee_shop.png` → "coffee shop"

## Features

- **Responsive grid**: 3 columns on desktop, 2 on mobile
- **Lightbox**: Click any photo to view enlarged
- **Keyboard navigation**: Arrow keys to navigate, Escape to close
- **Hover effect**: Subtle zoom on hover

## Ordering

Photos are displayed in alphabetical order by filename. Use numeric prefixes to control order:

```
01-first-photo.jpg
02-second-photo.jpg
03-third-photo.jpg
```

## Technical Details

- Images are served statically from `/assets/photos/`
- Next.js Image component handles optimization
- No external dependencies for the lightbox
