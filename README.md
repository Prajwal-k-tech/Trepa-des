# Trepa Landing Page

A React/TypeScript landing-page prototype for a precision-based prediction-market concept. It uses a Fusion Starter scaffold, Tailwind CSS, Radix UI components and Framer Motion.

## What is implemented

- Landing-page sections for the concept, features, example questions and beta signup.
- An interactive prediction slider with illustrative accuracy and payout calculations.
- Responsive navigation and client-side routing.
- A local signup confirmation state. Email addresses are not submitted to a backend or saved by this application.

Displayed signup counts, market counts, prize pools and adoption claims are sample marketing content, not verified product metrics. The UI illustrates a concept; it does not execute real trades, connect wallets, settle predictions or pay rewards.

## Run locally

```sh
npm ci
npm run dev
```

Vite is configured on port 8080. `npm run build` creates `dist/`; `npm run preview` serves a production build. Production assets and routing use `/Trepa-des/` for GitHub Pages. `npm run deploy` publishes with gh-pages and requires repository authorization.

## Checks and limitations

Build and runtime behavior have not yet been verified in this source review. The declared `typecheck` command runs `tsc` against a references-only root configuration; use `npx tsc -b` to check the referenced application and configuration projects. No test files were found in the source inventory, so the presence of Vitest is not evidence of test coverage.

The repository also contains design/specification files. They describe intended presentation, not delivered backend functionality. Template components and scaffolding should retain their upstream attribution.
