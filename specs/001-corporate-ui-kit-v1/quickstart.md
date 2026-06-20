# Quickstart: Corporate UI Kit v1

## Prerequisites

- Node.js installed
- npm available

## Install

```bash
npm install
```

## Run the Demo

```bash
npm run dev
```

Expected outcome:
- the Vite demo starts locally
- the corporate dashboard renders using mock data
- the page remains usable at desktop and mobile widths

## Open Storybook

```bash
npm run storybook
```

Expected outcome:
- component stories load with global tokens and styles
- controls are available only where useful
- documentation shows relevant states and accessibility behavior

## Run Tests

```bash
npm run test
```

Expected outcome:
- behavior-focused component tests pass in jsdom
- modal, table, button, input, checkbox, and pagination behavior is covered

## Build the Library and Demo

```bash
npm run build
```

Expected outcome:
- TypeScript validation passes
- the library build completes
- the demo build completes

## Build Storybook

```bash
npm run build-storybook
```

Expected outcome:
- Storybook compiles successfully with the shared tokens and styles

## Validation Checklist

- `src/index.ts` exports only public library APIs
- CSS tokens load before component styles
- modal focus returns to the trigger element
- clickable table rows remain keyboard accessible
- responsive demo layout works on small screens
