import { forwardRef } from 'react';
import type { InputProps } from './Input.types';
import { FormField } from '../FormField';
import { classNames } from '../../utils/classNames';
import { useControllableState } from '../../utils/useControllableState';
import styles from './Input.module.css';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    label,
    helperText,
    error,
    required,
    prefix,
    suffix,
    type = 'text',
    value,
    defaultValue = '',
    disabled,
    readOnly,
    className,
    onChange,
    ...props
  },
  ref,
) {
  const [currentValue, setCurrentValue] = useControllableState<string>({
    value,
    defaultValue,
  });

  return (
    <FormField id={id} label={label} helperText={helperText} error={error} required={required}>
      {({ fieldId, describedBy }) => (
        <div className={classNames(styles.root, className)}>
          <div
            className={classNames(
              styles.control,
              Boolean(error) && styles['control--error'],
              Boolean(disabled) && styles['control--disabled'],
            )}
          >
            {prefix ? <span className={styles.prefix}>{prefix}</span> : null}
            <input
              ref={ref}
              id={fieldId}
              type={type}
              className={styles.field}
              value={currentValue}
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              aria-invalid={error ? true : undefined}
              aria-describedby={describedBy}
              onChange={(event) => {
                setCurrentValue(event.target.value);
                onChange?.(event);
              }}
              {...props}
            />
            {suffix ? <span className={styles.suffix}>{suffix}</span> : null}
          </div>
        </div>
      )}
    </FormField>
  );
});
