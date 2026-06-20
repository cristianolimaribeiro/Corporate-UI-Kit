import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Componentes/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Enviar solicitação',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Button {...args} variant="primary">
        Primário
      </Button>
      <Button {...args} variant="secondary">
        Secundário
      </Button>
      <Button {...args} variant="danger">
        Perigo
      </Button>
      <Button {...args} variant="ghost">
        Discreto
      </Button>
    </div>
  ),
};
