# Demo Dashboard Contract: Corporate UI Kit v1

## Purpose

This contract defines the behavior expected from the Corporate Dashboard Demo.

## Required Behavior

- Use only local mock data.
- Compose the demo from the public library components.
- Present a realistic corporate dashboard layout.
- Include sidebar, header, metrics, filters, table, status badges, pagination,
  modal details, alerts, loading, and empty states.
- Remain usable on desktop, tablet, and mobile layouts.
- Allow horizontal table scrolling on smaller screens.

## Interaction Contract

- Filter controls must update local demo state.
- Table rows may open a details modal.
- Pagination must change the visible mock rows locally.
- Loading and empty states must be reachable in the demo.

## Accessibility Contract

- Demo navigation and controls must be keyboard usable.
- Modal focus behavior must match the component contract.
- Status and loading feedback must be accessible to assistive technologies.

## Scope Limits

- No backend integration.
- No authentication flow.
- No persistent storage.
- No remote data loading.
