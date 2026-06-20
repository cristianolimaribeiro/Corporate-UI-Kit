import type { InputHTMLAttributes, ReactNode } from 'react';
import type { FormFieldProps } from '../FormField';
import type { NativeInputType } from '../../types';

export interface InputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'type' | 'value' | 'defaultValue' | 'size' | 'prefix'
    >,
    Pick<FormFieldProps, 'id' | 'label' | 'required' | 'helperText' | 'error'> {
  type?: NativeInputType;
  value?: string;
  defaultValue?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}
