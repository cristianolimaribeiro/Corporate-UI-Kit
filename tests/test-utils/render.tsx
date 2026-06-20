import type { ReactElement } from 'react';
import { render as rtlRender, screen, type RenderOptions } from '@testing-library/react';

export function render(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return rtlRender(ui, options);
}

export { screen };
