import { render, screen } from '../../../tests/test-utils/render';
import { Loading } from './Loading';

describe('Loading', () => {
  it('announces loading status', () => {
    render(<Loading label="Loading content" />);

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Loading content')).toBeInTheDocument();
  });

  it('renders inline labels', () => {
    render(<Loading variant="inline" label="Loading content" />);

    expect(screen.getByText('Loading content')).toBeInTheDocument();
  });
});
