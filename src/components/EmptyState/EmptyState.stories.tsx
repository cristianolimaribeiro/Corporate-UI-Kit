import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from './EmptyState';
import { Button } from '../Button';

const meta: Meta<typeof EmptyState> = {
  title: 'Componentes/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'Nenhuma solicitação encontrada',
    description: 'Tente ajustar os filtros.',
    action: <Button>Limpar filtros</Button>,
  },
};
