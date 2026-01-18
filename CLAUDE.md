# CLAUDE.md - AI Assistant Guide

This document provides essential information for AI assistants working with this codebase.

## Project Overview

A personal blog for Jared Currie built with **Next.js 15**, **React 19**, and **TypeScript**. The site uses markdown-based content with static generation and is deployed at `https://jaredcurrie.com`.

## Tech Stack

- **Framework**: Next.js 15.0.7 (App Router)
- **UI**: React 19.2.1
- **Language**: TypeScript 5.5.2
- **Styling**: Tailwind CSS 3.4.4 with class-based dark mode
- **Content**: Markdown files with gray-matter (YAML front matter) + remark
- **Build**: Turbopack (development), static generation (production)

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── _components/        # React components (underscore = private)
│   │   └── _icons/         # SVG icon components
│   ├── feed.xml/           # RSS feed route handler
│   ├── posts/[slug]/       # Dynamic post pages
│   ├── globals.css         # Tailwind directives
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── interfaces/             # TypeScript type definitions
└── lib/                    # Utility functions
    ├── api.ts              # Post fetching from markdown
    ├── markdownToHtml.ts   # Markdown conversion
    └── constants.ts        # Site constants

_posts/                     # Markdown blog posts
public/assets/blog/         # Blog images (authors, covers)
```

## Development Commands

```bash
npm run dev      # Start dev server with Turbopack (http://localhost:3000)
npm run build    # Production build with static generation
npm start        # Start production server
```

## Key Conventions

### Component Patterns

1. **Functional components** with explicit `Props` type definitions:
   ```typescript
   type Props = {
     title: string;
     slug: string;
   };

   export function ComponentName({ title, slug }: Props) {
     return <section>...</section>;
   }
   ```

2. **Client components** use the `"use client"` directive at the top of the file

3. **Private directories** are prefixed with underscore (`_components`, `_icons`)

### File Naming

- Components: `kebab-case.tsx` (e.g., `hero-post.tsx`)
- Interfaces: `kebab-case.ts` (e.g., `post.ts`)
- CSS Modules: `component.module.css`

### Styling

- Use **Tailwind CSS** utility classes inline
- Responsive design with `md:` and `lg:` prefixes
- Dark mode with `dark:` prefix (class-based switching)
- CSS Modules for complex component styling only

### Import Paths

Use the `@/` path alias for imports from `src/`:
```typescript
import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";
```

## Content Management

### Creating Blog Posts

Add markdown files to `_posts/` with this front matter structure:

```markdown
---
title: "Post Title"
excerpt: "Brief description"
coverImage: "/assets/blog/posts/cover.jpg"
date: "2024-01-15T12:00:00.000Z"
author:
  name: Jared Currie
  picture: "/assets/blog/authors/jc.jpg"
ogImage:
  url: "/assets/blog/posts/cover.jpg"
---

Post content in markdown...
```

### Post Data Flow

1. `getAllPosts()` in `lib/api.ts` reads all `.md` files
2. `gray-matter` extracts front matter metadata
3. `remark` + `remark-html` converts markdown to HTML
4. Static pages generated at build time via `generateStaticParams()`

## Key Types

```typescript
// src/interfaces/post.ts
type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: { url: string };
  content: string;
  preview?: boolean;
};

// src/interfaces/author.ts
type Author = {
  name: string;
  picture: string;
};
```

## Important Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout with metadata, theme, footer |
| `src/app/page.tsx` | Home page with post listings |
| `src/app/posts/[slug]/page.tsx` | Dynamic post page |
| `src/lib/api.ts` | Markdown file reading utilities |
| `src/lib/constants.ts` | Site name, description constants |
| `tailwind.config.ts` | Custom colors, fonts, spacing |

## Things to Know

- **No testing framework** is configured - tests would need to be added
- **No ESLint/Prettier config** - follow existing code style patterns
- **Static generation** - all pages are pre-rendered at build time
- **RSS feed** available at `/feed.xml` (dynamic route handler)
- **Dark mode** uses localStorage for persistence, syncs across tabs

## Common Tasks

### Add a new component
1. Create file in `src/app/_components/`
2. Use TypeScript with explicit Props type
3. Export as named function

### Add a new post
1. Create `.md` file in `_posts/`
2. Add required front matter (title, date, author, images)
3. Write content in markdown
4. Run build to verify static generation

### Modify styling
1. Use Tailwind utility classes in JSX
2. For complex styles, create `.module.css` file
3. Dark mode: add `dark:` variants

## Site Information

- **URL**: https://jaredcurrie.com
- **Author**: Jared Currie
- **GitHub**: jccurrie1
- **LinkedIn**: currieja
