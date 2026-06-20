import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Componentes/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    label: 'Nome do solicitante',
    placeholder: 'Informe o nome do solicitante',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: 'O nome é obrigatório',
  },
};

export const WithPrefix: Story = {
  args: {
    prefix: '$',
  },
};
