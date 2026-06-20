# Public API Contract: Corporate UI Kit v1

## Purpose

This contract defines the public exports, component expectations, and stable
behavioral rules for consumers of the Corporate UI Kit.

## Entry Point

The package entry point is `src/index.ts`.

It must export:
- public components
- public prop and helper types that consumers need
- the documented token-loading mechanism for global styles

It must not export:
- internal helpers
- demo-only files
- mock data
- modal implementation details
- private utilities

## Component Contract Rules

### Buttons

- Support controlled loading state.
- Support primary, secondary, danger, and ghost variants.
- Support small, medium, and large sizes.
- Support optional leading and trailing icon nodes.

### Form Controls

- Input, Textarea, Select, and Checkbox must support controlled and
  uncontrolled usage.
- FormField must only provide accessibility wiring for label, helper text, and
  error text.
- Common accessibility associations must remain stable across all form controls.

### Alerts, Badges, Cards, EmptyState, and Loading

- Support the documented variants and optional icon nodes where specified.
- Keep the public API small and predictable.

### Modal

- Open and close behavior must be testable from the public API.
- Escape dismissal, focus trap, focus restoration, and optional overlay
  dismissal must remain visible in the DOM behavior.

### Table

- Table must be generic over row data.
- The consumer provides typed columns and a stable row key function.
- Sorting is requested through a callback; the table does not mutate or reorder
  incoming data.
- Clickable rows expose a single row action and stay keyboard accessible.

### Pagination

- Previous, next, first, and last controls must report page changes through a
  callback.
- Disabled and current-page states must be reflected in the DOM.

## Styling Contract

- Global design tokens must be loaded through the documented stylesheet import.
- Shared components must use CSS Modules and token-based values.
- Consumers must not depend on private CSS class names.

## Testability Contract

The public API must be verifiable with DOM-based interaction tests that assert:
- visible output
- keyboard interaction
- disabled and loading behavior
- focus movement
- accessible labeling
