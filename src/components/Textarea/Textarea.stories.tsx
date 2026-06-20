import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Componentes/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    label: 'Description',
    placeholder: 'Adicione detalhes',
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithCounter: Story = {
  args: {
    showCharacterCount: true,
    maxLength: 120,
    defaultValue: 'Resumo inicial',
  },
};
