# Forescribe Assignment – Signup Interface

This project is a responsive and animated signup interface built from the provided Figma design using Next.js, TypeScript, and Tailwind CSS.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

## Getting Started
```bash
Prerequisites:
- Node.js 18 or later
- npm or yarn

Installation:
git clone https://github.com/imrancodes/forescribe-assesment
cd forescribe-assesment
npm install

Run locally:
npm run dev

The application will be available at:
http://localhost:3000
```

## Assumptions Made
- Page transitions are implemented as entrance animations on initial render, as the design represents a single-screen signup flow.
- Background cards are decorative and non-interactive.
- All logos and profile images are treated as static assets and served from the public directory.

## Animations & Interactions
- The signup modal animates on entry using a subtle fade and scale effect.
- Primary buttons include hover and tap feedback using Framer Motion.
- Background cards animate into view with a staggered fade-up animation.

## Additional Features / Improvements
- Fully responsive layout across mobile, tablet, and desktop.
- added background with animated cards and a gradient overlay for visual depth.

## Directory Structure
```bash
app/
  layout.tsx
  page.tsx
  globals.css

components/
  modal/
    SignupModal.tsx
  background/
    BackgroundGrid.tsx
    FeatureCards.tsx
    card.ts
  ui/
    Card.tsx
    Overlay.tsx

public/
  logos/
  people/
  icons/
```

## Deployment
The project is deployed using Vercel.