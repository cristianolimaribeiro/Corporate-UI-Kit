import { forwardRef, useEffect, useId, useRef } from 'react';
import type { CheckboxProps } from './Checkbox.types';
import { classNames } from '../../utils/classNames';
import { useControllableState } from '../../utils/useControllableState';
import styles from './Checkbox.module.css';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    label,
    checked,
    defaultChecked = false,
    helperText,
    error,
    indeterminate = false,
    className,
    id,
    onChange,
    required,
    disabled,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;
  const describedBy = [helperText ? helperId : null, error ? errorId : null]
    .filter(Boolean)
    .join(' ')
    .trim();
  const localRef = useRef<HTMLInputElement | null>(null);
  const [isChecked, setIsChecked] = useControllableState<boolean>({
    value: checked,
    defaultValue: defaultChecked,
  });

  useEffect(() => {
    if (localRef.current) {
      localRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className={classNames(styles.root, className)}>
      <label className={styles.label} htmlFor={inputId}>
        <input
          ref={(node) => {
            localRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          id={inputId}
          type="checkbox"
          className={styles.control}
          checked={isChecked}
          disabled={disabled}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
          onChange={(event) => {
            setIsChecked(event.target.checked);
            onChange?.(event);
          }}
          {...props}
        />
        <span className={styles.text}>{label}</span>
      </label>
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
  );
});
