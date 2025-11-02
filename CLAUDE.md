# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website built with TypeScript, React 19, and Tailwind CSS. It uses the shadcn/ui component library for UI components and follows a modern Next.js App Router architecture.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Run development server
pnpm dev
# Default port: http://localhost:3000

# Build for production
pnpm build

# Run production build
pnpm start

# Lint code
pnpm lint
```

## Architecture & Structure

### Next.js Configuration
- **Build Configuration**: TypeScript and ESLint errors are ignored during builds (`next.config.mjs`)
- **Image Optimization**: Disabled (unoptimized: true)
- **App Router**: Uses Next.js 15 App Router pattern

### Project Structure
```
app/
  layout.tsx          # Root layout with metadata
  page.tsx            # Home page with all portfolio sections
  globals.css         # Tailwind base styles + CSS variables for theming

components/
  [section].tsx       # Section components (hero, projects, skills, etc.)
  ui/                 # shadcn/ui components (50+ components)

lib/
  utils.ts           # cn() utility for className merging

hooks/
  use-mobile.tsx     # Mobile detection hook
  use-toast.ts       # Toast notification hook
```

### Key Architectural Patterns

1. **Component Organization**
   - Page sections are in `/components` root
   - Reusable UI primitives are in `/components/ui`
   - Each section is a standalone component imported into `app/page.tsx`

2. **Styling System**
   - CSS variables defined in `app/globals.css` for theming
   - Dark mode support via `.dark` class
   - Custom Tailwind utilities for animations (fade-in, delays)
   - Color palette uses HSL CSS variables (e.g., `hsl(var(--primary))`)
   - Uses `cn()` utility from `lib/utils.ts` for conditional className merging

3. **Import Paths**
   - Uses `@/*` alias for absolute imports (configured in `tsconfig.json` and `components.json`)
   - Examples: `@/components/ui/button`, `@/lib/utils`, `@/hooks/use-toast`

4. **Client/Server Components**
   - Components with interactivity use `"use client"` directive
   - Example: `hero-section.tsx` uses client-side mouse tracking

5. **shadcn/ui Integration**
   - Configuration in `components.json`
   - Uses Radix UI primitives
   - Icon library: lucide-react
   - Base color: neutral
   - CSS variables mode enabled

## Portfolio Page Structure

The main page (`app/page.tsx`) renders these sections in order:
1. HeroSection - Interactive header with mouse-follow effect
2. Featured Projects
3. Case Studies
4. Skills
5. Education
6. Work Experience & Certifications
7. Contact

Each section has an ID for anchor navigation (e.g., `#projects`, `#skills`).

## Styling Guidelines

- Primary color scheme: Pink accent (`--primary: 336 80% 58%`)
- Background gradients: `from-white to-pink-50` pattern
- Animations: Custom fade-in animations with delays
- Spacing: Uses consistent spacing scale (py-24, space-y-24)
- Responsive: Mobile-first with md/lg breakpoints

## Important Notes

- The project was initially generated with v0.dev
- TypeScript strict mode is enabled
- React 19 and Next.js 15 are used (latest versions)
- pnpm is the package manager (check `pnpm-lock.yaml`)
