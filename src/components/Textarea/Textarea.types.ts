import type { TextareaHTMLAttributes } from 'react';
import type { FormFieldProps } from '../FormField';

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'defaultValue'>,
    Pick<FormFieldProps, 'id' | 'label' | 'required' | 'helperText' | 'error'> {
  value?: string;
  defaultValue?: string;
  showCharacterCount?: boolean;
}
