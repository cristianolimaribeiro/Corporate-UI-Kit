import { useId } from 'react';
import type { FormFieldProps } from './FormField.types';
import { classNames } from '../../utils/classNames';
import styles from './FormField.module.css';

export function FormField({
  id,
  label,
  required = false,
  helperText,
  error,
  className,
  labelClassName,
  contentClassName,
  children,
}: FormFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const labelId = `${fieldId}-label`;
  const helperId = `${fieldId}-helper`;
  const errorId = `${fieldId}-error`;
  const describedBy = [helperText ? helperId : null, error ? errorId : null]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <div className={classNames(styles.root, className)}>
      {label ? (
        <label id={labelId} htmlFor={fieldId} className={classNames(styles.label, labelClassName)}>
          <span>{label}</span>
          {required ? <span className={styles.required} aria-hidden="true">*</span> : null}
        </label>
      ) : null}
      <div className={classNames(styles.content, contentClassName)}>
        {children({
          fieldId,
          labelId,
          helperId,
          errorId,
          describedBy: describedBy || undefined,
        })}
        {helperText ? (
          <div id={helperId} className={styles.helper}>
            {helperText}
          </div>
        ) : null}
        {error ? (
          <div id={errorId} className={styles.error}>
            {error}
          </div>
        ) : null}
      </div>
    </div>
  );
}
