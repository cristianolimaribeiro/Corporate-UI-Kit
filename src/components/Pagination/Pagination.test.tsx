import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../tests/test-utils/render';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('navigates between pages', async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();

    render(<Pagination page={2} totalPages={5} onPageChange={onPageChange} />);

    await user.click(screen.getByRole('button', { name: 'Próxima página' }));

    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('disables boundary controls', () => {
    render(<Pagination page={1} totalPages={1} onPageChange={() => undefined} />);

    expect(screen.getByRole('button', { name: 'Página anterior' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Próxima página' })).toBeDisabled();
  });
});
