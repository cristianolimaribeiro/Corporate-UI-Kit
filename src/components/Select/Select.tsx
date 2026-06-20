import { forwardRef } from 'react';
import type { SelectProps } from './Select.types';
import { FormField } from '../FormField';
import { classNames } from '../../utils/classNames';
import { useControllableState } from '../../utils/useControllableState';
import styles from './Select.module.css';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    id,
    label,
    helperText,
    error,
    required,
    options,
    placeholder,
    value,
    defaultValue,
    className,
    onChange,
    disabled,
    ...props
  },
  ref,
) {
  const [currentValue, setCurrentValue] = useControllableState<string>({
    value,
    defaultValue: defaultValue ?? '',
  });

  return (
    <FormField id={id} label={label} helperText={helperText} error={error} required={required}>
      {({ fieldId, describedBy }) => (
        <div className={classNames(styles.root, className)}>
          <div className={styles.control}>
            <select
              ref={ref}
              id={fieldId}
              className={classNames(styles.field, Boolean(error) && styles['field--error'])}
              value={currentValue}
              disabled={disabled}
              required={required}
              aria-invalid={error ? true : undefined}
              aria-describedby={describedBy}
              onChange={(event) => {
                setCurrentValue(event.target.value);
                onChange?.(event);
              }}
              {...props}
            >
              {placeholder ? (
                <option value="" disabled={required}>
                  {placeholder}
                </option>
              ) : null}
              {options.map((option) => (
                <option key={option.value} value={option.value} disabled={option.disabled}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </FormField>
  );
});
