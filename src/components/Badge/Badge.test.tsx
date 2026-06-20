import { render, screen } from '../../../tests/test-utils/render';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders text', () => {
    render(<Badge>New</Badge>);

    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('supports pill shape', () => {
    render(<Badge pill>New</Badge>);

    expect(screen.getByText('New')).toHaveTextContent('New');
  });
});
