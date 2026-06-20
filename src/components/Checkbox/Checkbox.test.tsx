import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../tests/test-utils/render';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('toggles on click', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Receive updates" />);

    const checkbox = screen.getByRole('checkbox', { name: 'Receive updates' });
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('is disabled when requested', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Receive updates" disabled />);

    const checkbox = screen.getByRole('checkbox', { name: 'Receive updates' });
    expect(checkbox).toBeDisabled();

    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  it('supports indeterminate state', () => {
    render(<Checkbox label="Receive updates" indeterminate />);

    expect(screen.getByRole('checkbox', { name: 'Receive updates' })).toBePartiallyChecked();
  });
});
