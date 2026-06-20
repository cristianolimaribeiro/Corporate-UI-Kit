# Tasks: Corporate UI Kit v1

**Input**: Design documents from `/specs/001-corporate-ui-kit-v1/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Required. The feature spec and quickstart require component tests, demo validation, and final build verification.

**Organization**: Tasks are ordered to bootstrap the repository first, then
establish shared foundations, then implement components, then demo/docs, then
final validation.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to. Setup, foundational, and polish tasks have no story label.
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Inspect the real repository and bootstrap the workspace before any component code exists.

- [X] T001 Inspect the current repository state in `AGENTS.md`, `.specify/feature.json`, `.specify/memory/constitution.md`, `specs/001-corporate-ui-kit-v1/spec.md`, and `specs/001-corporate-ui-kit-v1/plan.md` to confirm the starting point before scaffolding
- [X] T002 Create `package.json` with scripts for `dev`, `build`, `preview`, `storybook`, `build-storybook`, `test`, `test:watch`, `lint`, and `format`, plus stable dependency declarations for React, TypeScript, Vite, Storybook, Vitest, React Testing Library, ESLint, and Prettier
- [X] T003 Install dependencies declared in `package.json` and generate `package-lock.json` with `npm install`
- [X] T004 Create the root toolchain configuration files `vite.config.ts`, `vitest.config.ts`, `eslint.config.js`, `tsconfig.json`, `tsconfig.node.json`, `.prettierrc`, `.storybook/main.ts`, `.storybook/preview.ts`, and `index.html`, and wire Storybook to load the global tokens and styles while enabling docs/autodocs and accessibility support
- [X] T005 Create the base source and test bootstrap files `src/main.tsx`, `src/demo/App.tsx`, `src/index.ts`, `src/styles/index.css`, `tests/setup.ts`, and `tests/test-utils/render.tsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared foundations that must exist before any component can be built.

**⚠️ CRITICAL**: No component work should begin until this phase is complete.

- [X] T006 Create the global design token and reset styles in `src/styles/tokens.css`, `src/styles/reset.css`, and `src/styles/global.css`, including the documented breakpoint values used by the library and the demo
- [X] T007 Create shared TypeScript and utility foundations in `src/types/shared.ts`, `src/types/index.ts`, `src/utils/classNames.ts`, `src/utils/focusable.ts`, and `src/utils/useControllableState.ts`
- [X] T008 Define the public surface in `src/index.ts` and `src/styles/index.css` so later component barrels and token imports can be added without exposing internal helpers

**Checkpoint**: The workspace, shared styles, and base utilities are ready for component implementation.

---

## Phase 3: User Story 1 - Reusable Component Library (Priority: P1) 🎯 MVP

**Goal**: Build the public component library with stories, tests, and public exports.

**Independent Test**: Each component can be imported from `src/index.ts`, rendered in Storybook, and exercised through behavior-focused DOM tests.

### Tests and Implementation for User Story 1

- [X] T009 [US1] Build the `Button` component in `src/components/Button/Button.tsx`, `src/components/Button/Button.types.ts`, `src/components/Button/Button.module.css`, `src/components/Button/Button.stories.tsx`, `src/components/Button/Button.test.tsx`, and `src/components/Button/index.ts`, then export it from `src/index.ts`
- [X] T010 [P] [US1] Build the `Badge` component in `src/components/Badge/Badge.tsx`, `src/components/Badge/Badge.types.ts`, `src/components/Badge/Badge.module.css`, `src/components/Badge/Badge.stories.tsx`, `src/components/Badge/Badge.test.tsx`, and `src/components/Badge/index.ts`, then export it from `src/index.ts`
- [X] T011 [P] [US1] Build the `Alert` component in `src/components/Alert/Alert.tsx`, `src/components/Alert/Alert.types.ts`, `src/components/Alert/Alert.module.css`, `src/components/Alert/Alert.stories.tsx`, `src/components/Alert/Alert.test.tsx`, and `src/components/Alert/index.ts`, then export it from `src/index.ts`
- [X] T012 [P] [US1] Build the `Card` component in `src/components/Card/Card.tsx`, `src/components/Card/Card.types.ts`, `src/components/Card/Card.module.css`, `src/components/Card/Card.stories.tsx`, `src/components/Card/Card.test.tsx`, and `src/components/Card/index.ts`, then export it from `src/index.ts`
- [X] T013 [P] [US1] Build the `Loading` component in `src/components/Loading/Loading.tsx`, `src/components/Loading/Loading.types.ts`, `src/components/Loading/Loading.module.css`, `src/components/Loading/Loading.stories.tsx`, `src/components/Loading/Loading.test.tsx`, and `src/components/Loading/index.ts`, then export it from `src/index.ts`
- [X] T014 [P] [US1] Build the `EmptyState` component in `src/components/EmptyState/EmptyState.tsx`, `src/components/EmptyState/EmptyState.types.ts`, `src/components/EmptyState/EmptyState.module.css`, `src/components/EmptyState/EmptyState.stories.tsx`, `src/components/EmptyState/EmptyState.test.tsx`, and `src/components/EmptyState/index.ts`, then export it from `src/index.ts`
- [X] T015 [US1] Build the `FormField` component in `src/components/FormField/FormField.tsx`, `src/components/FormField/FormField.types.ts`, `src/components/FormField/FormField.module.css`, `src/components/FormField/FormField.stories.tsx`, `src/components/FormField/FormField.test.tsx`, and `src/components/FormField/index.ts`, then export it from `src/index.ts`
- [X] T016 [P] [US1] Build the `Checkbox` component in `src/components/Checkbox/Checkbox.tsx`, `src/components/Checkbox/Checkbox.types.ts`, `src/components/Checkbox/Checkbox.module.css`, `src/components/Checkbox/Checkbox.stories.tsx`, `src/components/Checkbox/Checkbox.test.tsx`, and `src/components/Checkbox/index.ts`, then export it from `src/index.ts`
- [X] T017 [P] [US1] Build the `Input` component in `src/components/Input/Input.tsx`, `src/components/Input/Input.types.ts`, `src/components/Input/Input.module.css`, `src/components/Input/Input.stories.tsx`, `src/components/Input/Input.test.tsx`, and `src/components/Input/index.ts`, then export it from `src/index.ts`
- [X] T018 [P] [US1] Build the `Textarea` component in `src/components/Textarea/Textarea.tsx`, `src/components/Textarea/Textarea.types.ts`, `src/components/Textarea/Textarea.module.css`, `src/components/Textarea/Textarea.stories.tsx`, `src/components/Textarea/Textarea.test.tsx`, and `src/components/Textarea/index.ts`, then export it from `src/index.ts`
- [X] T019 [P] [US1] Build the `Select` component in `src/components/Select/Select.tsx`, `src/components/Select/Select.types.ts`, `src/components/Select/Select.module.css`, `src/components/Select/Select.stories.tsx`, `src/components/Select/Select.test.tsx`, and `src/components/Select/index.ts`, then export it from `src/index.ts`
- [X] T020 [P] [US1] Build the `Pagination` component in `src/components/Pagination/Pagination.tsx`, `src/components/Pagination/Pagination.types.ts`, `src/components/Pagination/Pagination.module.css`, `src/components/Pagination/Pagination.stories.tsx`, `src/components/Pagination/Pagination.test.tsx`, and `src/components/Pagination/index.ts`, then export it from `src/index.ts`
- [X] T021 [P] [US1] Build the `Table` component in `src/components/Table/Table.tsx`, `src/components/Table/Table.types.ts`, `src/components/Table/Table.module.css`, `src/components/Table/Table.stories.tsx`, `src/components/Table/Table.test.tsx`, and `src/components/Table/index.ts`, including typed columns, typed data, `getRowKey`, sort callbacks, row-click behavior, and then export it from `src/index.ts`
- [X] T022 [P] [US1] Build the `Modal` component in `src/components/Modal/Modal.tsx`, `src/components/Modal/Modal.types.ts`, `src/components/Modal/Modal.module.css`, `src/components/Modal/Modal.stories.tsx`, `src/components/Modal/Modal.test.tsx`, and `src/components/Modal/index.ts`, then export it from `src/index.ts`

**Checkpoint**: The public component library should now be importable from `src/index.ts` and covered by component-level stories and tests.

---

## Phase 4: User Story 2 - Validate Component Behavior (Priority: P1)

**Goal**: Harden the observable behavior of the public components, especially the accessibility-sensitive interactions.

**Independent Test**: The component test suite covers controlled and uncontrolled inputs, focus behavior, keyboard behavior, loading states, modal interactions, and table sorting without depending on internal implementation details.

### Tests for User Story 2

- [X] T023 [P] [US2] Tighten the loading, disabled, and keyboard interaction assertions in `src/components/Button/Button.test.tsx`, `src/components/Checkbox/Checkbox.test.tsx`, `src/components/Loading/Loading.test.tsx`, and `src/components/Alert/Alert.test.tsx`
- [X] T024 [P] [US2] Tighten the form-association and controlled/uncontrolled assertions in `src/components/FormField/FormField.test.tsx`, `src/components/Input/Input.test.tsx`, `src/components/Textarea/Textarea.test.tsx`, and `src/components/Select/Select.test.tsx`
- [X] T025 [P] [US2] Tighten the focus trap, Escape, overlay dismissal, aria-modal, and scroll-lock assertions in `src/components/Modal/Modal.test.tsx`
- [X] T026 [P] [US2] Tighten the sorting, row-click, empty-state, loading-state, and accessible caption assertions in `src/components/Table/Table.test.tsx` and `src/components/Pagination/Pagination.test.tsx`

**Checkpoint**: The component suite should now enforce the critical behavior and accessibility requirements from the spec.

---

## Phase 5: User Story 3 - Explore the Demo App (Priority: P2)

**Goal**: Build the Corporate Dashboard Demo using only local mock data and the public component APIs.

**Independent Test**: The demo renders a realistic corporate dashboard with sidebar, header, metric cards, filters, alerts, table, badges, pagination, modal details, loading, and empty states on desktop, tablet, and mobile layouts.

### Implementation for User Story 3

- [X] T027 [P] [US3] Create the demo data and local view-model helpers in `src/demo/mockData.ts`, `src/demo/demoState.ts`, and `src/demo/demoTypes.ts`
- [X] T028 [P] [US3] Build the Corporate Dashboard Demo shell and responsive layout in `src/demo/App.tsx` and `src/demo/App.module.css` using only public exports from `src/index.ts`, including the sidebar, header, indicator cards, and status badges
- [X] T029 [US3] Wire the demo interactions for filters, pagination, row-details modal, alerts, loading, empty states, indicator card values, and status badge states in `src/demo/App.tsx`

**Checkpoint**: The demo should be usable with local data only and should showcase the component library as a cohesive corporate interface.

---

## Phase 6: User Story 4 - Discover and Learn the Library (Priority: P2)

**Goal**: Document installation, usage, architecture, accessibility, limitations, and portfolio-ready presentation guidance.

**Independent Test**: A new developer can install the project, run the demo, open Storybook, run the tests, and understand the public API and constraints from the README.

### Implementation for User Story 4

- [X] T030 [US4] Write `README.md` with the project name, description, objective, stack, principles, components, structure, installation, execution, Storybook, tests, build, imports, global styles, technical decisions, accessibility, limitations, future improvements, and portfolio screenshot guidance

**Checkpoint**: The repository should now be documented well enough for another developer to install and use the project without extra guidance.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and cleanup across the completed library, demo, and documentation.

- [X] T031 [P] Run `npm run lint` and fix any ESLint issues in `src/`, `tests/`, `.storybook/`, `vite.config.ts`, `vitest.config.ts`, `eslint.config.js`, and `package.json`
- [X] T032 [P] Run `npm run test` and fix any failing component, Storybook, or demo behavior tests in `src/components/*/*.test.tsx`, `src/demo/*.test.tsx`, and `tests/setup.ts`
- [X] T033 [P] Run `npm run build` and fix TypeScript or Vite build failures in `src/index.ts`, `src/main.tsx`, `src/demo/App.tsx`, `vite.config.ts`, and `tsconfig*.json`
- [X] T034 [P] Run `npm run build-storybook` and fix Storybook build or docs compilation failures in `.storybook/main.ts`, `.storybook/preview.ts`, and the `src/components/*/*.stories.tsx` files
- [X] T035 [P] Run `npm run format -- --check` and fix formatting drift in `src/`, `tests/`, `.storybook/`, `README.md`, and the root config files
- [X] T036 [P] Verify `src/index.ts` exports only the public components, public types, and documented style entry points, with no demo files or internal helpers leaking into the public surface

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies. Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion. Blocks all component work.
- **User Story 1 (Phase 3)**: Depends on Foundational completion.
- **User Story 2 (Phase 4)**: Depends on User Story 1 completion because it hardens the component behaviors already implemented.
- **User Story 3 (Phase 5)**: Depends on all required public components being available.
- **User Story 4 (Phase 6)**: Depends on the library, demo, and Storybook surface being in place.
- **Polish (Phase 7)**: Depends on the desired implementation being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Establishes the reusable public component library.
- **User Story 2 (P1)**: Validates the behavior and accessibility of the public components.
- **User Story 3 (P2)**: Consumes the public library in a realistic corporate dashboard demo.
- **User Story 4 (P2)**: Documents how to install, run, test, and extend the project.

### Within Each User Story

- Tests are written as part of each component task so the behavior is defined before implementation is finalized.
- Shared foundations and tokens must exist before component styling.
- FormField must be complete before Input, Textarea, and Select.
- Components are exported through `src/index.ts` as they are added.
- Demo work starts only after the public component API exists.

### Parallel Opportunities

- Setup tasks T002 through T005 can run in sequence, but T004 and T005 touch different files and can be split if needed.
- Badge, Alert, Card, Loading, EmptyState, Checkbox, Input, Textarea, Select, Pagination, Table, and Modal can be built in parallel after the foundational phase, with FormField completed first for the dependent fields.
- The behavioral hardening tasks in Phase 4 can run in parallel because they touch separate test files.
- Demo layout and demo interaction tasks can be split between T028 and T029.
- Final validation tasks T031 through T036 can run in parallel once the implementation is stable.

---

## Parallel Example: User Story 1

```bash
# Build reusable components in parallel after Button and FormField are in place:
Task: "Build the Badge component in src/components/Badge/Badge.tsx, src/components/Badge/Badge.types.ts, src/components/Badge/Badge.module.css, src/components/Badge/Badge.stories.tsx, src/components/Badge/Badge.test.tsx, and src/components/Badge/index.ts, then export it from src/index.ts"
Task: "Build the Alert component in src/components/Alert/Alert.tsx, src/components/Alert/Alert.types.ts, src/components/Alert/Alert.module.css, src/components/Alert/Alert.stories.tsx, src/components/Alert/Alert.test.tsx, and src/components/Alert/index.ts, then export it from src/index.ts"
Task: "Build the Card component in src/components/Card/Card.tsx, src/components/Card/Card.types.ts, src/components/Card/Card.module.css, src/components/Card/Card.stories.tsx, src/components/Card/Card.test.tsx, and src/components/Card/index.ts, then export it from src/index.ts"
```

---

## Implementation Strategy

### MVP First

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete the core public components in Phase 3, starting with Button and FormField.
4. Re-run the behavior hardening tasks in Phase 4.
5. Build the Corporate Dashboard Demo in Phase 5.
6. Finish README and project documentation in Phase 6.
7. Run the full validation pass in Phase 7.

### Incremental Delivery

1. Bootstrap the workspace and shared foundations.
2. Implement reusable components with stories and tests.
3. Harden accessibility and interaction behavior.
4. Compose the Corporate Dashboard Demo.
5. Document the project for external use.
6. Validate with lint, tests, build, and Storybook build.

### Parallel Team Strategy

1. One developer can own setup and foundational files.
2. Once the foundations exist, different developers can work on independent components in parallel.
3. Another developer can own the demo after the public components are available.
4. README and final validation can happen once the component and demo surface is stable.

---

## Notes

- [P] tasks = different files, no dependencies
- [US1] tasks build the public reusable component library
- [US2] tasks harden observable behavior and accessibility
- [US3] tasks build the Corporate Dashboard Demo
- [US4] tasks document the project for external consumption
- Each component task includes both Storybook stories and a behavior-focused test file
- Avoid scope creep: do not add backend, auth, API, database, or additional components
