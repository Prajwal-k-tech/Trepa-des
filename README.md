# Trepa concept demo

Trepa is a front-end concept for a precision-based prediction market. This repository provides a responsive landing page and a local practice simulator so visitors can try a numeric forecast and inspect the scoring rule.

## Run locally

```sh
npm ci
npm run dev
```

Vite serves the app at `http://localhost:8080`. `npm run build` creates `dist/`, `npm run preview` serves the production build, `npm run typecheck` runs the TypeScript project checks, and `npm test` checks the demo scoring rule. The production base path is `/Trepa-des/` for GitHub Pages.

## Practice simulator

- Select one of four fictional numeric examples, choose an estimate from 0% to 10%, and stake practice points.
- The simulator settles immediately against a hard-coded sample answer. It uses `score = max(0, 100 − 20 × distance in percentage points)` and `points returned = stake × score ÷ 50`.
- The maximum practice return is 2× the stake. A zero score loses the full practice stake. The market has no real odds or price discovery.
- The starting balance is 500 practice points. Balance and up to 10 recent results persist in this browser's local storage; **Reset points** clears them.
- No email is collected by the page. The contact link opens the visitor's email app.

## Limits

The example questions, answers, scoring formula, and practice points are illustrative. This app has no live data, market participants, backend, user accounts, wallet connection, real trading, settlement process, or payouts. It is not a real-money product. A production market would need independently verified data sources and settlement rules, real odds and market infrastructure, payments and custody choices, and jurisdiction-specific review.

The source includes Fusion Starter scaffolding and its existing UI components. There is no verified production service behind the concept.
