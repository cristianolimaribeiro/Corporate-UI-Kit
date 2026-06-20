import { forwardRef } from 'react';
import type { TextareaProps } from './Textarea.types';
import { FormField } from '../FormField';
import { classNames } from '../../utils/classNames';
import { useControllableState } from '../../utils/useControllableState';
import styles from './Textarea.module.css';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  {
    id,
    label,
    helperText,
    error,
    required,
    value,
    defaultValue = '',
    rows = 4,
    maxLength,
    showCharacterCount = false,
    className,
    onChange,
    disabled,
    ...props
  },
  ref,
) {
  const [currentValue, setCurrentValue] = useControllableState<string>({
    value,
    defaultValue,
  });
  const count = currentValue.length;
  const helper = showCharacterCount ? (
    <div className={styles.meta}>
      <span>{helperText}</span>
      <span className={styles.count}>
        {count}
        {typeof maxLength === 'number' ? ` / ${maxLength}` : ''}
      </span>
    </div>
  ) : (
    helperText
  );

  return (
    <FormField id={id} label={label} helperText={helper} error={error} required={required}>
      {({ fieldId, describedBy }) => (
        <div className={classNames(styles.root, className)}>
          <div className={classNames(styles.control, Boolean(error) && styles['control--error'])}>
            <textarea
              ref={ref}
              id={fieldId}
              rows={rows}
              maxLength={maxLength}
              className={styles.field}
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
            />
          </div>
        </div>
      )}
    </FormField>
  );
});
