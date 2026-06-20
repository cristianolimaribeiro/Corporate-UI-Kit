import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Componentes/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Ativo',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Badge {...args} variant="neutral">
        Neutro
      </Badge>
      <Badge {...args} variant="info">
        Informação
      </Badge>
      <Badge {...args} variant="success">
        Sucesso
      </Badge>
      <Badge {...args} variant="warning">
        Aviso
      </Badge>
      <Badge {...args} variant="danger">
        Erro
      </Badge>
    </div>
  ),
};
