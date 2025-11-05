# IINIA - Industrial AI Solutions Website

A production-ready, multi-page website for IINIA, an industrial AI company. Built with Next.js 14, TypeScript, and modern web technologies.

## 🎯 Features

- **Multi-page Architecture**: Home, Solutions, Industries, Cases, About, Contact, Blog, Careers, Partners
- **SEO Optimized**: SSR/SSG, semantic HTML, metadata per page, sitemap, robots.txt
- **Multi-language**: Spanish (ES) and English (EN) with next-intl
- **Dark/Light Theme**: System-aware theme switching with next-themes
- **Accessibility**: WCAG 2.1 AA compliant with focus states, skip links, and proper ARIA labels
- **Performance**: Optimized for Lighthouse scores ≥95
- **Animations**: Framer Motion micro-interactions + tsparticles background
- **Modern UI**: shadcn/ui components with Tailwind CSS
- **Blog System**: MDX/Markdown support with localized content
- **Contact Form**: Validated with Zod and React Hook Form

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000/es or http://localhost:3000/en
```

### Build for Production

```bash
# Type check
npm run typecheck

# Lint
npm run lint

# Build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
.
├── app/
│   ├── (i18n)/[locale]/          # Localized pages
│   │   ├── page.tsx              # Home
│   │   ├── solutions/
│   │   ├── industries/
│   │   ├── cases/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── blog/
│   │   ├── careers/
│   │   └── partners/
│   ├── layout.tsx                # Root layout
│   ├── sitemap.ts                # Dynamic sitemap
│   └── robots.ts                 # Robots.txt
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── anim/                     # Framer Motion wrappers
│   ├── graphics/                 # Particles & 3D scenes
│   ├── forms/                    # Form components
│   ├── seo/                      # SEO wrapper
│   ├── nav/                      # Navigation components
│   └── home/                     # Home page sections
├── lib/
│   ├── utils.ts                  # Utility functions
│   ├── i18n.ts                   # i18n configuration
│   ├── seo.ts                    # SEO helpers
│   ├── fetcher.ts                # SWR fetcher
│   └── blog.ts                   # Blog utilities
├── messages/
│   ├── es.json                   # Spanish translations
│   └── en.json                   # English translations
├── content/
│   └── blog/                     # Blog posts (ES/EN)
├── public/
│   ├── images/
│   └── og/                       # OpenGraph images
└── styles/
    └── globals.css               # Global styles with theme tokens
```

## 🎨 Brand Colors

The project uses a custom color palette defined in CSS variables:

- **Brand Purple**: `#450693` (dark), `#8C00FF` (main)
- **Accent Pink**: `#FF3F7F`
- **Warning Yellow**: `#FFC400`

Colors automatically adjust for dark mode.

## 🌐 Internationalization

The site supports Spanish (ES) and English (EN):

- Translations in `messages/es.json` and `messages/en.json`
- Routes: `/es/...` and `/en/...`
- Middleware handles locale detection
- Language switcher in navbar

## ✅ TODO / Placeholders

All placeholder content is marked with `` or `// TODO:` comments:

- Replace hero images and animations
- Add real team photos in About page
- Configure actual contact form API endpoint
- Replace blog post content with real articles
- Add real case study data
- Configure analytics (Google Analytics, etc.)
- Add actual partner logos
- Set up email service for contact form
- Create real OpenGraph images

## 🧪 Development Notes

### Adding a New Page

1. Create page in `app/(i18n)/[locale]/your-page/page.tsx`
2. Add translations to `messages/es.json` and `messages/en.json`
3. Add navigation link in `components/nav/navbar.tsx`
4. Update sitemap in `app/sitemap.ts`

### Adding Blog Posts

1. Create markdown file in `content/blog/es/` and `content/blog/en/`
2. Include frontmatter with title, description, date, author, tags
3. Posts auto-appear on blog list page

### Customizing Theme

Edit CSS variables in `styles/globals.css`:

```css
:root {
  --brand-900: #your-color;
  --brand-600: #your-color;
  /* ... */
}
```

## 📦 Key Dependencies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **next-intl**: Internationalization
- **next-themes**: Theme management
- **next-seo**: SEO optimization
- **Framer Motion**: Animations
- **tsparticles**: Particle effects
- **React Three Fiber**: Optional 3D scenes
- **shadcn/ui**: UI components
- **Zod**: Form validation
- **React Hook Form**: Form management
- **SWR**: Data fetching

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
npm start
```

## 📄 License

Private - IINIA © 2024

## 🤝 Contributing

This is a private project. For internal development guidelines, see the team wiki.

---

**Built with ❤️ for IINIA**
