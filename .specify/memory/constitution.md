<!--
Sync Impact Report
Version change: 1.0.0 -> 2.0.0
Modified principles:
- Reusable by Design -> Simplicity Over Speculation
- Accessibility by Default -> Accessibility Before Merge
- Design System Consistency -> Predictable, Typed Public APIs
- Spec-Driven Delivery -> Composition and Reuse With Proof
- Verification and Versioning Discipline -> Design System and Styling Discipline
Added sections:
- Architecture & Dependency Constraints
- Component, Accessibility, and Testing Standards
Removed sections:
- none
Templates requiring updates:
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
- ⚠ .specify/templates/commands/ (not present in repo)
Follow-up TODOs:
- none
-->

# Corporate UI Kit Constitution

## Core Principles

### Simplicity Over Speculation
Implementation MUST prefer the smallest solution that satisfies the defined
requirement. KISS, DRY, and YAGNI are mandatory: avoid overengineering,
abstractions that do not solve a real problem, premature refactors, and
functional scope that was not requested.

Reuse MUST be justified by a concrete benefit. A component, hook, or utility
MUST not be generalized until at least one real use case needs that generality.

### Accessibility Before Merge
A11y is a release requirement, not a follow-up task. New components and demo
screens MUST be accessible from the first implementation: semantic HTML,
keyboard navigation, visible focus, readable contrast, and screen-reader
support are mandatory.

ARIA MUST be used only when native HTML is insufficient. Disabled, loading, and
error states MUST be comprehensible to assistive technology and to sighted
users.

### Predictable, Typed Public APIs
Component APIs MUST be small, explicit, and easy to predict from the name and
props alone. Public types MUST be declared explicitly, `any` MUST not be used
without a technical justification, and the API surface MUST remain stable unless
the change is intentional and documented.

Low coupling is required. Shared components MUST depend on tokens, props, and
composition rather than hidden internal state or cross-component assumptions.

### Composition and Reuse With Proof
Composition MUST be preferred over generic abstraction. A component MUST be
built from smaller pieces when that keeps the API simpler and the behavior
clearer, but reuse MUST be concrete and measurable rather than speculative.

Custom hooks MUST be introduced only when they remove real duplication or
encapsulate behavior that is used in more than one place. Functions and
components MUST be preferred over classes when they are sufficient.

### Design System and Styling Discipline
Shared UI MUST use the project design tokens and CSS Modules. Visual values MUST
come from tokens or local component variables, not repeated literals scattered
through stylesheets.

The project MUST not use styled-components, Tailwind, Redux, Material UI, Chakra
UI, Ant Design, Bootstrap, or other ready-made visual libraries. Optional
chaining, nullish coalescing, modern React, modern TypeScript, and modern
JavaScript features are allowed when they improve clarity.

### Verification and Documentation Discipline
Every user-facing change MUST be backed by stories, behavior-focused tests, and
updated documentation. Tests MUST validate observable behavior, not internal
implementation details.

The work is not complete until lint passes, tests pass, the library build
passes, the demo app build passes, Storybook builds successfully, exports are
correct, and the documentation is current.

## Architecture & Dependency Constraints

The repository contains a reusable React component library and a demo
application. The library is the product; the demo exists to showcase and verify
the library.

Each component MUST live in its own folder with only the files required for its
implementation, styles, types, stories, tests, and public export. Internal
details MUST remain internal. `src/index.ts` MUST export only public components,
public types, and public library APIs.

All shared components MUST be built with React and TypeScript. CSS Modules are
the required styling mechanism for component styles. Design tokens MUST be the
source of truth for shared visual values.

The following are allowed when they add real value: generics, forwardRef,
optional chaining, nullish coalescing, and modern React and JavaScript language
features.

The following are restricted:
- `any` without explicit technical justification
- export of implementation details from the public entry point
- hooks custom-built without a clear reuse or encapsulation need
- refactors outside the requested scope
- features that were not requested or are only speculative

## Component, Accessibility, and Testing Standards

Every component MUST have a clear responsibility, a small and predictable API,
explicit types, isolated CSS Modules styles, and stories that cover relevant
states.

Every component MUST:
- use semantic HTML first
- use ARIA only when native HTML is insufficient
- support keyboard interaction when applicable
- expose a visible focus state
- avoid duplicated logic
- avoid repeated visual values in raw CSS
- include behavior-focused tests

Modal components have additional mandatory behavior:
- `role="dialog"`
- `aria-modal="true"`
- close on Escape
- focus trap while open
- return focus to the trigger element on close
- lock body scroll while open
- expose an accessible name

Tests MUST prioritize observable behavior:
- user interaction
- keyboard use
- disabled state
- loading state
- error messaging
- focus management
- accessibility-relevant states

Tests MUST not depend heavily on internal implementation details. Artificial
tests that only raise coverage without proving behavior are not acceptable.

## Governance

This constitution governs specification, planning, task creation, implementation,
and validation for the Corporate UI Kit. If a conflict exists, the constitution
takes priority.

Priority order when tradeoffs are required:
1. Accessibility and correct behavior
2. Simplicity over speculative flexibility
3. Explicit requirements over invented features
4. Explicit APIs over generic abstractions
5. Native or already-adopted dependencies over new libraries

Any exception to this constitution MUST be technically justified in the
implementation plan. That justification MUST explain why the simpler or more
direct approach is insufficient.

Amendments require a pull request that describes the change, updates dependent
templates or guidance where needed, and records the version bump rationale.

Versioning follows semantic versioning:
- MAJOR: backward-incompatible rule changes or removals
- MINOR: new principles, sections, or materially expanded guidance
- PATCH: clarifications, wording improvements, and non-semantic refinements

Compliance reviews MUST confirm that the change is spec-backed, accessible,
consistent with the design system, and verified at the required level before
merge.

**Version**: 2.0.0 | **Ratified**: 2026-06-18 | **Last Amended**: 2026-06-18
