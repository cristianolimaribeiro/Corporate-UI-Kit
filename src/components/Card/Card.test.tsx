import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../tests/test-utils/render';
import { Card } from './Card';

describe('Card', () => {
  it('renders header and footer', () => {
    render(<Card header="Summary" footer="Footer">Body</Card>);

    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('supports keyboard activation when clickable', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Card clickable onClick={onClick}>
        Open request
      </Card>,
    );

    const card = screen.getByRole('button', { name: /open request/i });
    card.focus();
    await user.keyboard('{Enter}');

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
