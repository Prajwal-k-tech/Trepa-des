# Trepa Landing Page

A React/TypeScript landing-page prototype for a precision-based prediction-market concept. It uses a Fusion Starter scaffold, Tailwind CSS, Radix UI components and Framer Motion.

## What is implemented

- Landing-page sections for the concept, features, example questions and beta signup.
- An interactive prediction slider with illustrative accuracy and payout calculations.
- Responsive navigation and client-side routing.
- A local signup confirmation state. Email addresses are not submitted to a backend or saved by this application.

Displayed signup counts, market counts, prize pools and fictional testimonials are explicitly labeled illustrative, not verified product metrics. The UI illustrates a concept; it does not execute real trades, connect wallets, settle predictions or pay rewards.

## Run locally

```sh
npm ci
npm run dev
```

Vite is configured on port 8080. `npm run build` creates `dist/`; `npm run preview` serves a production build. Production assets and routing use `/Trepa-des/` for GitHub Pages. `npm run deploy` publishes with gh-pages and requires repository authorization.

## Checks and limitations

Production build and referenced TypeScript project checks passed on 2 October 2026. `npm run typecheck` runs `tsc -b`. Full browser interactions remain unverified. Dependency updates within existing ranges reduced npm audit findings from 19 to five; remaining Router, Vitest mocker and Picomatch findings need separate dependency review before deployment. No test files were found in the source inventory, so the presence of Vitest is not evidence of test coverage.

The repository also contains design/specification files. They describe intended presentation, not delivered backend functionality. Template components and scaffolding should retain their upstream attribution.
