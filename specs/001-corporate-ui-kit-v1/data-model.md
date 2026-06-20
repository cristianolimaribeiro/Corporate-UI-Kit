# Data Model: Corporate UI Kit v1

## 1. Public Component Definition

Represents a public UI component exported by the library.

Fields:
- `name`: component name
- `purpose`: short description of what it does
- `variants`: fixed variant options, if any
- `sizes`: fixed size options, if any
- `states`: supported states such as disabled, loading, error, empty
- `controlledModes`: whether the component supports controlled, uncontrolled,
  or both modes
- `accessibilityContract`: keyboard, focus, label, and ARIA expectations
- `storybookCoverage`: relevant stories and states to document

Validation rules:
- Names must stay stable once exported publicly.
- Variants and sizes must be closed sets.
- Public behavior must be documented and testable.

## 2. Design Token Set

Represents the global visual system used by all shared components and the demo.

Fields:
- `color`
- `typography`
- `spacing`
- `borderRadius`
- `shadow`
- `size`
- `zIndex`
- `transition`
- `breakpoint`

Validation rules:
- Tokens must be exposed as CSS custom properties.
- Components must not duplicate raw visual values when a token exists.
- Breakpoints must be documented and reused consistently.

## 3. Field Accessibility Binding

Represents the relationship between a form control and its label, helper text,
and error text.

Fields:
- `controlId`
- `labelId`
- `helperTextId`
- `errorTextId`
- `describedBy`
- `required`
- `invalid`

Relationships:
- Used by Input, Textarea, Select, and Checkbox.
- FormField may generate or accept the IDs, but the control consumes them.

Validation rules:
- Labels must point to the control.
- Helper text and error text must be associated through `aria-describedby`
  where needed.
- Error text must be attached when validation fails.

## 4. Table Definition

Represents the generic data shape used by the reusable table.

Fields:
- `columns`: typed column definitions
- `rows`: typed row data
- `getRowKey`: function that returns a stable row key
- `sortState`: current column and direction, if any
- `onSortChange`: callback for sort requests
- `onRowClick`: optional row action callback
- `emptyState`: empty UI configuration
- `loadingState`: loading UI configuration

Relationships:
- Generic over the row data shape.
- Can render custom column output per row.

Validation rules:
- Only one column may be actively sorted at a time.
- The table must not re-order data internally.
- Clickable rows must remain keyboard operable.

## 5. Modal Session State

Represents the open modal lifecycle.

Fields:
- `open`
- `title`
- `size`
- `overlayDismissible`
- `triggerElement`
- `initialFocusTarget`
- `lastFocusedElement`

State transitions:
- `closed` -> `opening`
- `opening` -> `open`
- `open` -> `closing`
- `closing` -> `closed`

Validation rules:
- Escape closes the modal.
- Focus must stay trapped while open.
- Focus must return to the trigger on close.
- Body scroll must be restored after close.

## 6. Demo Dashboard Data

Represents the local mock data used in the Corporate Dashboard Demo.

Fields:
- `indicatorCards`
- `filters`
- `requestRows`
- `selectedRequest`
- `alerts`
- `pagination`
- `loading`
- `emptyState`

Relationships:
- The demo screen composes the public library components using this local data.

Validation rules:
- All data is local and mock-based.
- The demo must work without backend calls.
- Responsive behavior must keep the table usable on small screens.
