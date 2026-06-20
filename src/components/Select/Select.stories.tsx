import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Componentes/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Status',
    placeholder: 'Selecione um status',
    options: [
      { label: 'Abertas', value: 'open' },
      { label: 'Em análise', value: 'pending' },
      { label: 'Encerradas', value: 'closed' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: 'Escolha um valor',
  },
};
