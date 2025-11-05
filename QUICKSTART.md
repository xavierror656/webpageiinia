# 🚀 IINIA Website - Quick Start Guide

## Initial Setup (First Time)

### 1. Install Dependencies

```bash
cd webpageiinia
npm install
```

This will install all required packages including:
- Next.js, React, TypeScript
- Tailwind CSS and shadcn/ui
- next-intl for i18n
- next-themes for dark/light mode
- Framer Motion for animations
- tsparticles for particle effects
- React Three Fiber (optional 3D)
- Form validation (Zod, React Hook Form)
- And many more...

### 2. Set Up Environment Variables (Optional)

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
- `SITE_URL`: Your production URL
- Analytics IDs (if using)
- API keys (if needed)

### 3. Run Development Server

```bash
npm run dev
```

Open your browser:
- Spanish: http://localhost:3000/es
- English: http://localhost:3000/en

The site will hot-reload as you make changes.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript types |

## Project Configuration Overview

### Already Configured ✅

- **Routing**: App Router with i18n middleware (`/es` and `/en`)
- **Styling**: Tailwind CSS with custom brand tokens
- **Theme**: Dark/light mode with system detection
- **SEO**: Metadata, sitemap, robots.txt, OpenGraph
- **Icons**: Lucide React, Phosphor React, Heroicons
- **Forms**: Validation with Zod
- **Blog**: MDX/Markdown support
- **Animations**: Framer Motion + Particles
- **Accessibility**: Skip links, ARIA labels, focus states

### Needs Your Attention ⚠️

1. **Replace Placeholder Content**
   - All text marked with ``
   - Hero images and graphics
   - Team photos in About page
   - Real case study data
   - Actual partner logos

2. **Configure Contact Form API**
   - Update `components/forms/contact-form.tsx`
   - Set up email service (SendGrid, Resend, etc.)
   - Add API route in `app/api/contact/route.ts`

3. **Add Real Blog Posts**
   - Replace sample posts in `content/blog/es/` and `content/blog/en/`
   - Add real images in `public/images/blog/`

4. **Set Up Analytics**
   - Add Google Analytics ID to `.env.local`
   - Configure tracking in layout

5. **Create OpenGraph Images**
   - Design OG images for social sharing
   - Place in `public/og/`

## File Structure Quick Reference

```
webpageiinia/
├── 📁 app/                    # Next.js App Router
│   ├── (i18n)/[locale]/       # Localized pages
│   ├── layout.tsx             # Root layout
│   ├── sitemap.ts             # Auto-generated sitemap
│   └── robots.ts              # Robots.txt
├── 📁 components/             # React components
│   ├── ui/                    # shadcn/ui base components
│   ├── nav/                   # Navbar & Footer
│   ├── home/                  # Home page sections
│   ├── forms/                 # Form components
│   ├── anim/                  # Animation wrappers
│   ├── graphics/              # Particles & 3D
│   └── seo/                   # SEO wrapper
├── 📁 lib/                    # Utilities & helpers
├── 📁 messages/               # i18n translations (ES/EN)
├── 📁 content/                # Blog posts (Markdown)
├── 📁 public/                 # Static assets
└── 📁 styles/                 # Global CSS
```

## Pages Overview

| Page | Route | Status |
|------|-------|--------|
| Home | `/[locale]` | ✅ Complete with placeholders |
| Solutions | `/[locale]/solutions` | ✅ Complete with placeholders |
| Industries | `/[locale]/industries` | ✅ Complete with placeholders |
| Cases | `/[locale]/cases` | ✅ Complete with placeholders |
| About | `/[locale]/about` | ✅ Complete with placeholders |
| Contact | `/[locale]/contact` | ✅ Form needs API connection |
| Blog | `/[locale]/blog` | ✅ Sample posts included |
| Blog Post | `/[locale]/blog/[slug]` | ✅ MDX support ready |
| Careers | `/[locale]/careers` | ✅ Placeholder page |
| Partners | `/[locale]/partners` | ✅ Placeholder page |

## Customization Guide

### Change Brand Colors

Edit `styles/globals.css`:

```css
:root {
  --brand-900: #450693;  /* Your dark purple */
  --brand-600: #8C00FF;  /* Your main purple */
  --accent-500: #FF3F7F; /* Your accent pink */
  --warn-500: #FFC400;   /* Your warning yellow */
}
```

### Add a New Page

1. Create file: `app/(i18n)/[locale]/your-page/page.tsx`
2. Add translations to `messages/es.json` and `messages/en.json`
3. Add link in `components/nav/navbar.tsx`
4. Update `app/sitemap.ts`

### Add Blog Post

1. Create markdown: `content/blog/es/your-post.md`
2. Create English version: `content/blog/en/your-post.md`
3. Include frontmatter:

```yaml
---
title: 'Your Post Title'
description: 'Short description'
date: '2024-01-15'
author: 'Your Name'
tags: ['AI', 'Manufacturing']
---
```

## Testing Checklist Before Production

- [ ] Replace all `` content
- [ ] Add real images and optimize them
- [ ] Test contact form submission
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Test dark/light theme switching
- [ ] Test language switching
- [ ] Run `npm run build` successfully
- [ ] Check Lighthouse scores (target: 95+)
- [ ] Verify SEO metadata on all pages
- [ ] Test accessibility with screen reader
- [ ] Configure production environment variables
- [ ] Set up error monitoring (Sentry, etc.)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Vercel auto-detects Next.js
4. Set environment variables
5. Deploy!

### Manual Deployment

```bash
npm run build
npm run start
```

Serve on port 3000 or configure with your hosting provider.

## Need Help?

- Check the main `README.md` for detailed documentation
- Review component files for inline comments and TODOs
- All placeholders are clearly marked with `` or `// TODO:`

## Performance Tips

- Images: Use `next/image` component (already implemented)
- Fonts: Using local Inter font (already configured)
- Code splitting: Automatic with Next.js App Router
- Particles: Respects `prefers-reduced-motion`
- 3D Scene: Lazy-loaded with fallback

---

**You're all set! Happy coding! 🎉**

For questions or issues, refer to the component documentation or the main README.
