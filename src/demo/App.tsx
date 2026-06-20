import { useEffect, useMemo, useState } from 'react';
import {
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  EmptyState,
  Input,
  Loading,
  Modal,
  Pagination,
  Select,
  Table,
} from '../index';
import { applyDemoFilters, formatCurrency, paginateRequests, sortDemoRequests } from './demoState';
import { mockRequests } from './mockData';
import type { DashboardRequest, DemoFilters } from './demoTypes';
import type { TableColumn, TableSortState } from '../index';
import styles from './App.module.css';

const pageSize = 4;

const initialFilters: DemoFilters = {
  query: '',
  status: 'all',
  urgentOnly: false,
};

const statusVariant: Record<DashboardRequest['status'], 'neutral' | 'info' | 'success' | 'warning' | 'danger'> = {
  Open: 'warning',
  Pending: 'info',
  Approved: 'success',
  Rejected: 'danger',
};

const statusLabel: Record<DashboardRequest['status'], string> = {
  Open: 'Aberta',
  Pending: 'Em análise',
  Approved: 'Aprovada',
  Rejected: 'Recusada',
};

export function App() {
  const [filters, setFilters] = useState<DemoFilters>(initialFilters);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sortState, setSortState] = useState<TableSortState | null>({ key: 'submittedAt', direction: 'desc' });
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [alertVisible, setAlertVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 700);
  };

  const filteredRequests = useMemo(() => applyDemoFilters(mockRequests, filters), [filters]);
  const sortedRequests = useMemo(
    () => sortDemoRequests(filteredRequests, sortState),
    [filteredRequests, sortState],
  );

  const totalPages = Math.max(1, Math.ceil(sortedRequests.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleRequests = paginateRequests(sortedRequests, currentPage, pageSize);

  useEffect(() => {
    setPage(1);
  }, [filters, sortState]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const selectedRequest = mockRequests.find((request) => request.id === selectedRequestId) ?? null;

  const columns: TableColumn<DashboardRequest>[] = [
    {
      key: 'id',
      header: 'Solicitação',
      accessor: 'id',
      sortable: true,
      sortLabel: 'Ordenar por solicitação',
    },
    {
      key: 'requester',
      header: 'Solicitante',
      accessor: 'requester',
      sortable: true,
      sortLabel: 'Ordenar por solicitante',
    },
    {
      key: 'department',
      header: 'Área',
      accessor: 'department',
      sortable: true,
      sortLabel: 'Ordenar por área',
    },
    {
      key: 'amount',
      header: 'Valor',
      sortable: true,
      align: 'right',
      sortLabel: 'Ordenar por valor',
      render: (request) => formatCurrency(request.amount),
    },
    {
      key: 'status',
      header: 'Situação',
      sortable: true,
      sortLabel: 'Ordenar por status',
      render: (request) => (
        <Badge variant={statusVariant[request.status]} pill>
          {statusLabel[request.status]}
        </Badge>
      ),
    },
    {
      key: 'submittedAt',
      header: 'Enviada em',
      accessor: 'submittedAt',
      sortable: true,
      sortLabel: 'Ordenar por data de envio',
    },
  ];

  const approvedCount = mockRequests.filter((request) => request.status === 'Approved').length;
  const pendingCount = mockRequests.filter((request) => request.status === 'Pending').length;
  const openCount = mockRequests.filter((request) => request.status === 'Open').length;
  const urgentCount = mockRequests.filter((request) => request.urgent).length;

  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandName}>Corporate UI Kit</div>
          <p className={styles.brandDescription}>
            Uma biblioteca de componentes React pronta para portfólio, voltada a interfaces corporativas.
          </p>
        </div>
        <nav className={styles.nav} aria-label="Seções da demo">
          <div className={styles.navItemActive}>Painel</div>
          <div className={styles.navItem}>Solicitações</div>
          <div className={styles.navItem}>Aprovações</div>
          <div className={styles.navItem}>Relatórios</div>
        </nav>
        <Alert
          variant="info"
          title="Dados locais"
          description="Esta demo usa apenas estado local e registros mockados."
          onClose={alertVisible ? () => setAlertVisible(false) : undefined}
        />
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div className={styles.titleBlock}>
            <span className={styles.eyebrow}>Demo do Corporate Dashboard</span>
            <h1 className={styles.title}>Operações de aprovação de solicitações</h1>
            <p className={styles.subtitle}>
              Veja como botões, formulários, tabelas, alertas, badges, paginação, carregamento e modal
              se combinam em uma tela administrativa realista.
            </p>
          </div>
          <div className={styles.headerActions}>
            <Button variant="secondary" onClick={handleRefresh}>
              Atualizar dados
            </Button>
            <Button
              iconBefore={<span aria-hidden="true">+</span>}
              onClick={() => setSelectedRequestId(mockRequests[0]?.id ?? null)}
            >
              Abrir primeira solicitação
            </Button>
          </div>
        </header>

        {alertVisible ? (
          <div className={styles.alertStack}>
            <Alert
              variant="success"
              title="Demo pronta"
              description="Use os filtros abaixo para alternar entre os estados de carregamento, vazio e tabela."
              onClose={() => setAlertVisible(false)}
            />
          </div>
        ) : null}

        <div className={styles.metrics}>
          <Card className={styles.metricCard}>
            <div className={styles.metricLabel}>Solicitações abertas</div>
            <div className={styles.metricMeta}>
              <div className={styles.metricValue}>{openCount}</div>
              <Badge variant="warning">Abertas</Badge>
            </div>
          </Card>
          <Card className={styles.metricCard}>
            <div className={styles.metricLabel}>Solicitações em análise</div>
            <div className={styles.metricMeta}>
              <div className={styles.metricValue}>{pendingCount}</div>
              <Badge variant="info">Em análise</Badge>
            </div>
          </Card>
          <Card className={styles.metricCard}>
            <div className={styles.metricLabel}>Solicitações aprovadas</div>
            <div className={styles.metricMeta}>
              <div className={styles.metricValue}>{approvedCount}</div>
              <Badge variant="success">Aprovadas</Badge>
            </div>
          </Card>
          <Card className={styles.metricCard}>
            <div className={styles.metricLabel}>Solicitações urgentes</div>
            <div className={styles.metricMeta}>
              <div className={styles.metricValue}>{urgentCount}</div>
              <Badge variant="danger">Urgentes</Badge>
            </div>
          </Card>
        </div>

        <Card className={styles.filters} header={<strong>Filtrar solicitações</strong>}>
          <div className={styles.filterGrid}>
            <Input
              label="Buscar"
              placeholder="ID, solicitante, área ou resumo"
              value={filters.query}
              onChange={(event) =>
                setFilters((current) => ({ ...current, query: event.target.value }))
              }
            />
            <Select
              label="Status"
              value={filters.status}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  status: event.target.value as DemoFilters['status'],
                }))
              }
              options={[
                { label: 'Todos os status', value: 'all' },
                { label: 'Abertas', value: 'Open' },
                { label: 'Em análise', value: 'Pending' },
                { label: 'Aprovadas', value: 'Approved' },
                { label: 'Recusadas', value: 'Rejected' },
              ]}
            />
            <Checkbox
              label="Somente urgentes"
              checked={filters.urgentOnly}
              onChange={(event) =>
                setFilters((current) => ({ ...current, urgentOnly: event.target.checked }))
              }
            />
          </div>
        </Card>

        {loading ? (
          <Loading variant="page" label="Carregando dados do painel" />
        ) : (
          <Card className={styles.tableCard}>
            <div className={styles.tableHeader}>
              <div>
                <strong>Tabela de solicitações</strong>
                <p className={styles.subtitle}>
                  {sortedRequests.length}{' '}
                  {sortedRequests.length === 1 ? 'solicitação corresponde' : 'solicitações correspondem'} aos
                  filtros atuais.
                </p>
              </div>
              <div className={styles.tableActions}>
                <Button size="sm" variant="ghost" onClick={() => setFilters(initialFilters)}>
                  Redefinir filtros
                </Button>
              </div>
            </div>

            {sortedRequests.length === 0 ? (
              <div className={styles.emptyWrapper}>
                <EmptyState
                  title="Nenhuma solicitação corresponde aos filtros"
                  description="Limpe um ou mais filtros para ver as solicitações novamente."
                  action={
                    <Button size="sm" onClick={() => setFilters(initialFilters)}>
                      Limpar filtros
                    </Button>
                  }
                />
              </div>
            ) : (
                <Table
                  columns={columns}
                  data={visibleRequests}
                  getRowKey={(row) => row.id}
                caption="Solicitações corporativas"
                sortState={sortState}
                onSortChange={(nextState) => {
                  setSortState(nextState);
                }}
                onRowClick={(row) => setSelectedRequestId(row.id)}
                rowAriaLabel={(row) => `${row.id} request`}
              />
            )}

            <div className={styles.footerRow}>
                <p className={styles.subtitle}>
                Exibindo {visibleRequests.length} de {sortedRequests.length} solicitações filtradas.
                </p>
              <Pagination
                page={currentPage}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          </Card>
        )}
      </section>

      <Modal
        open={Boolean(selectedRequest)}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            setSelectedRequestId(null);
          }
        }}
        title={selectedRequest ? `Solicitação ${selectedRequest.id}` : 'Detalhes da solicitação'}
        size="lg"
        footer={
          <Button variant="secondary" onClick={() => setSelectedRequestId(null)}>
            Fechar
          </Button>
        }
      >
        {selectedRequest ? (
          <div className={styles.detailsList}>
            <div className={styles.detailRow}>
              <div className={styles.detailLabel}>Solicitante</div>
              <div>{selectedRequest.requester}</div>
            </div>
            <div className={styles.detailRow}>
              <div className={styles.detailLabel}>Área</div>
              <div>{selectedRequest.department}</div>
            </div>
            <div className={styles.detailRow}>
              <div className={styles.detailLabel}>Valor</div>
              <div>{formatCurrency(selectedRequest.amount)}</div>
            </div>
            <div className={styles.detailRow}>
              <div className={styles.detailLabel}>Enviada em</div>
              <div>{selectedRequest.submittedAt}</div>
            </div>
            <div className={styles.detailRow}>
              <div className={styles.detailLabel}>Situação</div>
              <div>
                <Badge variant={statusVariant[selectedRequest.status]} pill>
                  {statusLabel[selectedRequest.status]}
                </Badge>
              </div>
            </div>
            <div className={styles.detailRow}>
              <div className={styles.detailLabel}>Resumo</div>
              <div>{selectedRequest.summary}</div>
            </div>
          </div>
        ) : null}
      </Modal>
    </main>
  );
}
