import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Componentes/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    label: 'Receber atualizações',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};
