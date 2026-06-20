import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../tests/test-utils/render';
import { Table } from './Table';
import { Badge } from '../Badge';

type RequestRow = {
  id: string;
  requester: string;
  amount: string;
  status: string;
};

const columns = [
  {
    key: 'id',
    header: 'Solicitação',
    accessor: 'id' as const,
    sortable: true,
    sortLabel: 'Ordenar por solicitação',
  },
  { key: 'requester', header: 'Solicitante', accessor: 'requester' as const },
  { key: 'amount', header: 'Valor', accessor: 'amount' as const, align: 'right' as const },
  {
    key: 'status',
    header: 'Situação',
    sortable: true,
    render: (row: RequestRow) => (
      <Badge variant={row.status === 'Approved' ? 'success' : 'neutral'}>
        {row.status === 'Approved' ? 'Aprovada' : 'Aberta'}
      </Badge>
    ),
  },
];

const data: RequestRow[] = [
  { id: 'REQ-1001', requester: 'Ana Souza', amount: 'R$ 1.240', status: 'Open' },
  { id: 'REQ-1002', requester: 'Bruno Lima', amount: 'R$ 4.900', status: 'Approved' },
];

describe('Table', () => {
  it('renders columns and data', () => {
    render(
      <Table columns={columns} data={data} getRowKey={(row) => row.id} caption="Solicitações corporativas" />,
    );

    expect(screen.getByRole('table', { name: 'Solicitações corporativas' })).toBeInTheDocument();
    expect(screen.getByText('REQ-1001')).toBeInTheDocument();
    expect(screen.getByText('Ana Souza')).toBeInTheDocument();
  });

  it('renders empty state', () => {
    render(
      <Table columns={columns} data={[]} getRowKey={(row) => row.id} caption="Solicitações corporativas" />,
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText(/nenhuma linha encontrada/i)).toBeInTheDocument();
  });

  it('renders loading state', () => {
    render(
      <Table
        columns={columns}
        data={[]}
        loading
        getRowKey={(row) => row.id}
        caption="Solicitações corporativas"
      />,
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Carregando dados da tabela')).toBeInTheDocument();
  });

  it('notifies sort changes', async () => {
    const user = userEvent.setup();
    const onSortChange = vi.fn();

    render(
      <Table
        columns={columns}
        data={data}
        getRowKey={(row) => row.id}
        caption="Solicitações corporativas"
        onSortChange={onSortChange}
        sortState={null}
      />,
    );

    await user.click(screen.getByRole('button', { name: 'Ordenar por solicitação' }));
    expect(onSortChange).toHaveBeenCalledWith({ key: 'id', direction: 'asc' });
  });

  it('supports clickable rows', async () => {
    const user = userEvent.setup();
    const onRowClick = vi.fn();

    render(
      <Table
        columns={columns}
        data={data}
        getRowKey={(row) => row.id}
        caption="Solicitações corporativas"
        onRowClick={onRowClick}
        rowAriaLabel={(row) => row.id}
      />,
    );

    const row = screen.getByText('REQ-1001').closest('tr');
    row?.focus();
    await user.keyboard('{Enter}');

    expect(onRowClick).toHaveBeenCalledWith(data[0], 0);
  });
});
