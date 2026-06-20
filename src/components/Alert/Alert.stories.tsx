import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Componentes/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    title: 'Solicitação aprovada',
    description: 'O fluxo de aprovação foi concluído com sucesso.',
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '0.75rem', width: 'min(34rem, 92vw)' }}>
      <Alert {...args} variant="info" title="Aviso" description="Status informativo." />
      <Alert {...args} variant="success" title="Sucesso" description="Tudo funcionou." />
      <Alert {...args} variant="warning" title="Atenção" description="Verifique a configuração." />
      <Alert {...args} variant="error" title="Erro" description="Algo falhou." />
    </div>
  ),
};
