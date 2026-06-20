import type { InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'defaultChecked'> {
  label: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  helperText?: ReactNode;
  error?: ReactNode;
  indeterminate?: boolean;
}
