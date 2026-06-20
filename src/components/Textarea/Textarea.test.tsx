import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../tests/test-utils/render';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('supports typing', async () => {
    const user = userEvent.setup();
    render(<Textarea label="Description" />);

    const textarea = screen.getByRole('textbox', { name: 'Description' });
    await user.type(textarea, 'Hello');

    expect(textarea).toHaveValue('Hello');
  });

  it('shows character count', () => {
    render(<Textarea label="Description" showCharacterCount maxLength={120} defaultValue="Hello" />);

    expect(screen.getByText('5 / 120')).toBeInTheDocument();
  });
});
