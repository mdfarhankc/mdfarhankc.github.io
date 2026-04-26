# Mohammed Farhan K C - Portfolio

My personal portfolio website built with modern web technologies.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Radix)
- **Animations:** Motion (Framer Motion)
- **Theming:** next-themes (dark/light mode)
- **Font:** Inter + JetBrains Mono
- **Contact Form:** Formspree

## Sections

- Hero with animated gradient text and social links
- About with stats cards
- Experience & Education timeline
- Skills grid (Backend, Frontend & Mobile, Databases & Tools)
- Projects showcase with hover overlays
- Contact form with info cards
- Footer

## Getting Started

```bash
# Install dependencies
bun install

# Run dev server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Setup

1. Add your resume as `public/resume.pdf`
2. Add an OG image as `public/og-image.png` (1200x630)
3. Update `metadataBase` in `src/app/layout.tsx` with your domain
4. Update project links in `src/components/projects.tsx`

## Deploy

```bash
bun run build
```

Deploy on [Vercel](https://vercel.com) for the best experience with Next.js.
