import { render, screen } from '../../../tests/test-utils/render';
import { FormField } from './FormField';
import { Input } from '../Input';

describe('FormField', () => {
  it('wires label and helper ids', () => {
    render(
      <FormField label="Email" helperText="Use your work address">
        {({ fieldId, describedBy }) => <Input id={fieldId} aria-describedby={describedBy} />}
      </FormField>,
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByText('Use your work address')).toBeInTheDocument();
  });
});
