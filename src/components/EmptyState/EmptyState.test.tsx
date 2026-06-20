import { render, screen } from '../../../tests/test-utils/render';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('renders title and description', () => {
    render(<EmptyState title="No data" description="Try again later" />);

    expect(screen.getByText('No data')).toBeInTheDocument();
    expect(screen.getByText('Try again later')).toBeInTheDocument();
  });
});
