import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../tests/test-utils/render';
import { Select } from './Select';

describe('Select', () => {
  it('renders typed options', () => {
    render(
      <Select
        label="Status"
        options={[
          { label: 'Open', value: 'open' },
          { label: 'Closed', value: 'closed' },
        ]}
      />,
    );

    expect(screen.getByRole('combobox', { name: 'Status' })).toBeInTheDocument();
  });

  it('supports selection changes', async () => {
    const user = userEvent.setup();
    render(
      <Select
        label="Status"
        options={[
          { label: 'Open', value: 'open' },
          { label: 'Closed', value: 'closed' },
        ]}
      />,
    );

    await user.selectOptions(screen.getByRole('combobox', { name: 'Status' }), 'closed');

    expect(screen.getByRole('combobox', { name: 'Status' })).toHaveValue('closed');
  });
});
