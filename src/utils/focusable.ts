const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

function isVisible(element: HTMLElement): boolean {
  return !element.hasAttribute('hidden') && element.getAttribute('aria-hidden') !== 'true';
}

export function getFocusableElements(root: ParentNode | null): HTMLElement[] {
  if (!root) {
    return [];
  }

  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)).filter(
    (element) => isVisible(element) && !element.hasAttribute('disabled'),
  );
}

export function getFirstFocusableElement(root: ParentNode | null): HTMLElement | null {
  return getFocusableElements(root)[0] ?? null;
}
