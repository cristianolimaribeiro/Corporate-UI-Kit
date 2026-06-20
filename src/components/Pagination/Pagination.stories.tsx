import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Componentes/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    page: 3,
    totalPages: 8,
    onPageChange: () => undefined,
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};
