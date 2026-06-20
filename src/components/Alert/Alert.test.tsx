import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../tests/test-utils/render';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders title and description', () => {
    render(<Alert title="Updated" description="Saved successfully" />);

    expect(screen.getByText('Updated')).toBeInTheDocument();
    expect(screen.getByText('Saved successfully')).toBeInTheDocument();
  });

  it('invokes close actions', async () => {
    const onClose = vi.fn();
    render(<Alert description="Saved successfully" onClose={onClose} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /fechar alerta/i }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
