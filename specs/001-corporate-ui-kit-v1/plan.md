# Corporate UI Kit v1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development
> (recommended) or superpowers:executing-plans to implement this plan task-by-task.
> Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a reusable React and TypeScript component library with 14 public
components, a corporate dashboard demo, Storybook documentation, and a
behavior-focused test suite.

**Architecture:** The repository currently contains only the Spec Kit scaffold,
the feature spec, and the associated checklist. There is no `package.json` or
application code to preserve, so the implementation will bootstrap a single Vite
workspace at the repo root instead of splitting into packages. Library
components live under `src/components/*`, shared tokens and base styles live in
`src/styles/*`, the demo lives in `src/demo/*`, and `src/index.ts` remains the
public entry point used by both the demo and the docs. Storybook and Vitest will
consume the same component APIs so the demo, docs, and tests stay aligned.

**Tech Stack:** React 19, TypeScript 5.x, Vite 6.x, Storybook 9.x, Vitest 3.x,
React Testing Library, CSS Modules, ESLint 9.x, Prettier 3.x, `@storybook/addon-essentials`,
`@storybook/addon-a11y`, and `@testing-library/jest-dom`.

---

## Summary

Bootstrap a portfolio-grade corporate UI kit from the current spec-kit scaffold.
The repo already contains `.specify`, `AGENTS.md`, the feature spec, and the
spec checklist; it does not yet contain `package.json`, source code, a demo app,
Storybook, or test configuration. This plan creates the full workspace while
keeping the repo structure small and intentional.

## Technical Context

**Language/Version**: React 19 with TypeScript 5.x, pinned to current stable
patch releases at implementation time

**Primary Dependencies**: Vite 6, Storybook 9, Vitest 3, React Testing Library,
`@testing-library/jest-dom`, CSS Modules, ESLint 9, Prettier 3

**Storage**: N/A. The demo uses local mock data only.

**Testing**: Vitest with a jsdom environment, React Testing Library, and
`@testing-library/user-event` for observable interactions

**Target Platform**: Modern evergreen browsers for the demo and Storybook,
Node.js tooling for local development and CI

**Project Type**: Reusable component library + Vite demo application +
Storybook documentation + component test suite

**Performance Goals**: Fast local feedback, perceptually instant UI interactions,
and responsive rendering across desktop, tablet, and mobile layouts

**Constraints**: No Tailwind, styled-components, Redux, Material UI, Chakra UI,
Ant Design, Bootstrap, data grid, backend, API, authentication, or modal
library; CSS Modules only for component styling; generics only where they add
value, primarily the Table component

**Scale/Scope**: 14 public components, one demo dashboard, one Storybook catalog,
and a focused test suite built around observable behavior

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] The scope is real, requested, and small enough to avoid overengineering or
  speculative abstractions.
- [x] Shared components use explicit, predictable APIs with strong typing and
  no `any` unless justified in the plan.
- [x] Accessibility is designed in from the start: semantic HTML, keyboard
  support, visible focus, and screen-reader behavior are covered.
- [x] Shared UI uses CSS Modules and design tokens; banned visual libraries are
  not introduced.
- [x] Reuse is concrete, composition is preferred, and custom hooks are only
  introduced when they remove real duplication.
- [x] The feature has stories, behavior-focused tests, and verification steps
  that cover library, demo, and Storybook builds when relevant.
- [x] Public exports remain limited to public library APIs and implementation
  details stay internal.

## Project Structure

### Documentation (this feature)

```text
specs/001-corporate-ui-kit-v1/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
index.html
public/
src/
├── components/
│   ├── Button/
│   ├── Input/
│   ├── Textarea/
│   ├── Select/
│   ├── Checkbox/
│   ├── FormField/
│   ├── Alert/
│   ├── Badge/
│   ├── Card/
│   ├── Modal/
│   ├── Table/
│   ├── Pagination/
│   ├── Loading/
│   └── EmptyState/
├── demo/
├── styles/
├── types/
├── utils/
├── index.ts
└── main.tsx

.storybook/
tests/
├── setup.ts
└── test-utils/

package.json
tsconfig.json
tsconfig.node.json
vite.config.ts
vitest.config.ts
eslint.config.js
README.md
```

**Structure Decision**: The repository will stay as a single package at the
root. The current repo state contains only Spec Kit metadata plus the feature
spec and checklist, so there is nothing to migrate or preserve from an existing
application layer. The chosen layout keeps the library, demo, styles, Storybook,
and tests colocated but separated by responsibility.

## Complexity Tracking

No constitution exceptions are expected for the first implementation pass.
If a later task needs a deliberate deviation, it must be justified in the task
plan before code is written.
