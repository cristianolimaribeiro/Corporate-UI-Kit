import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from './Table';
import type { TableProps } from './Table.types';
import { Badge } from '../Badge';

type RequestRow = {
  id: string;
  requester: string;
  amount: string;
  status: 'Open' | 'Approved' | 'Rejected';
};

const rows: RequestRow[] = [
  { id: 'REQ-1001', requester: 'Ana Souza', amount: 'R$ 1.240', status: 'Open' },
  { id: 'REQ-1002', requester: 'Bruno Lima', amount: 'R$ 4.900', status: 'Approved' },
];

function RequestTable(props: TableProps<RequestRow>) {
  return <Table {...props} />;
}

const meta: Meta<typeof RequestTable> = {
  title: 'Componentes/Table',
  component: RequestTable,
  tags: ['autodocs'],
  args: {
    columns: [
      { key: 'id', header: 'Solicitação', accessor: 'id', sortable: true, sortLabel: 'Ordenar por solicitação' },
      { key: 'requester', header: 'Solicitante', accessor: 'requester' },
      { key: 'amount', header: 'Valor', accessor: 'amount', align: 'right' },
      {
        key: 'status',
        header: 'Situação',
        sortable: true,
        render: (row) => (
          <Badge variant={row.status === 'Approved' ? 'success' : 'neutral'}>
            {row.status === 'Approved' ? 'Aprovada' : 'Aberta'}
          </Badge>
        ),
      },
    ],
    data: rows,
    caption: 'Solicitações corporativas',
    getRowKey: (row) => row.id,
    sortState: { key: 'id', direction: 'asc' },
    onSortChange: () => undefined,
    onRowClick: () => undefined,
  },
};

export default meta;

type Story = StoryObj<typeof RequestTable>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
    data: [],
  },
};

export const Empty: Story = {
  args: {
    data: [],
    sortState: null,
  },
};
