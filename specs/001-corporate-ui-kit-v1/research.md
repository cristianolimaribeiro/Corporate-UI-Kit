# Research: Corporate UI Kit v1

## 1. Workspace and Tooling

- Decision: Bootstrap a single root package rather than a monorepo.
- Rationale: The repo currently has no `package.json`, no app code, and no
  existing package boundaries to preserve. A single package keeps setup simple
  and matches the requested v1 scope.
- Alternatives considered:
  - Monorepo with separate library and app packages: unnecessary overhead for
    the first version.
  - Reusing an existing workspace: not possible because no workspace exists.

## 2. Dependency Set

- Decision: Use React 19, TypeScript 5.x, Vite 6.x, Storybook 9.x, Vitest 3.x,
  ESLint 9.x, and Prettier 3.x with the latest stable patches selected at
  implementation time.
- Rationale: These majors are the current stable line for a modern component
  library and they align with the required stack. Keeping the majors current
  reduces compatibility work and avoids obsolete patterns.
- Alternatives considered:
  - React 18 / Storybook 8 / older tooling: unnecessary when the project starts
    from scratch and needs a current portfolio stack.

## 3. Build and App Architecture

- Decision: Use Vite library mode for the component package and a Vite demo app
  from the same source tree.
- Rationale: This keeps the public component API and the showcase app close
  together while still allowing a clean library build and a local demo.
- Alternatives considered:
  - Separate build systems for library and demo: more configuration without a
    clear payoff.
  - Server-rendered app framework: outside the required scope.

## 4. Styling Strategy

- Decision: Use CSS Modules per component plus a small set of global token and
  reset files.
- Rationale: CSS Modules provide local style isolation and fit the requirement
  to avoid utility frameworks and shared visual libraries. Global tokens keep
  colors, spacing, radius, shadows, z-index, and transitions consistent.
- Alternatives considered:
  - styled-components or Tailwind: explicitly disallowed.
  - global CSS only: too easy to drift and duplicate values across components.

## 5. Forms and Accessibility

- Decision: Treat Input, Textarea, Select, and Checkbox as components that
  support both controlled and uncontrolled usage. FormField acts only as the
  accessibility wiring layer for label, helper text, and error text IDs.
- Rationale: This matches native React form conventions and keeps the field
  API predictable while avoiding an overly generic field abstraction.
- Alternatives considered:
  - FormField owns the input and layout: too much abstraction for v1.
  - Separate control-only APIs: would fragment behavior and accessibility.

## 6. Modal Behavior

- Decision: Implement Modal manually with a portal, focus trap, body scroll
  lock, Escape handling, focus restoration, and optional overlay dismissal.
- Rationale: The spec forbids an external modal library and the required
  behavior is specific enough that a local implementation is clearer and easier
  to test.
- Alternatives considered:
  - Third-party dialog package: disallowed by the scope.
  - Minimal overlay without focus management: would fail accessibility and the
    acceptance criteria.

## 7. Table Behavior

- Decision: Make Table a generic typed component with a simple sort callback,
  one active sort at a time, and optional clickable rows.
- Rationale: This supports the library use case without turning the table into a
  data grid. The API stays small and testable.
- Alternatives considered:
  - Internal sorting and data management: rejected by the spec.
  - Multiple simultaneous sort states: unnecessary complexity.

## 8. Storybook and Accessibility Addons

- Decision: Configure Storybook with the Vite builder, autodocs, useful controls
  only, and an accessibility addon because the project emphasizes accessible UI.
- Rationale: Storybook is part of the product and should show the component
  states the spec calls out. The a11y addon is justified because accessibility
  is a core requirement, not an afterthought.
- Alternatives considered:
  - No accessibility addon: weaker validation surface for the portfolio.
  - Extra docs/testing addons beyond essentials: avoidable overhead for v1.

## 9. Testing Strategy

- Decision: Use Vitest + React Testing Library + user-event + jest-dom in a
  jsdom environment and test observable user behavior only.
- Rationale: The acceptance criteria are interaction-driven. These tools match
  the requested stack and keep tests close to how users interact with the UI.
- Alternatives considered:
  - Snapshot-heavy tests: too brittle and too implementation-driven.
  - E2E-only validation: too slow for component-level behavior.
