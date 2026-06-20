import type { SelectHTMLAttributes } from 'react';
import type { FormFieldProps } from '../FormField';

export interface SelectOption<T extends string = string> {
  label: string;
  value: T;
  disabled?: boolean;
}

export interface SelectProps<T extends string = string>
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'defaultValue' | 'size'>,
    Pick<FormFieldProps, 'id' | 'label' | 'required' | 'helperText' | 'error'> {
  options: SelectOption<T>[];
  placeholder?: string;
  value?: T;
  defaultValue?: T;
}
