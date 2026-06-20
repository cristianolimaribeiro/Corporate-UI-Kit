import type { ReactNode } from 'react';

export interface FormFieldBinding {
  fieldId: string;
  labelId: string;
  helperId: string;
  errorId: string;
  describedBy: string | undefined;
}

export interface FormFieldProps {
  id?: string;
  label?: ReactNode;
  required?: boolean;
  helperText?: ReactNode;
  error?: ReactNode;
  className?: string;
  labelClassName?: string;
  contentClassName?: string;
  children: (binding: FormFieldBinding) => ReactNode;
}
