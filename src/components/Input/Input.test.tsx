import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../tests/test-utils/render';
import { Input } from './Input';

describe('Input', () => {
  it('associates label and control', () => {
    render(<Input label="Email" />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('supports typing', async () => {
    const user = userEvent.setup();
    render(<Input label="Email" />);

    const input = screen.getByRole('textbox', { name: 'Email' });
    await user.type(input, 'hello@example.com');

    expect(input).toHaveValue('hello@example.com');
  });

  it('shows error state', () => {
    render(<Input label="Email" error="Invalid email" />);

    expect(screen.getByText('Invalid email')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Email' })).toHaveAttribute('aria-invalid', 'true');
  });

  it('is disabled when requested', () => {
    render(<Input label="Email" disabled />);

    expect(screen.getByRole('textbox', { name: 'Email' })).toBeDisabled();
  });
});
