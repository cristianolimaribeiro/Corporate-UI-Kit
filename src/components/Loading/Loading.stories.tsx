import type { Meta, StoryObj } from '@storybook/react-vite';
import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Componentes/Loading',
  component: Loading,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Spinner: Story = {};

export const Inline: Story = {
  args: {
    variant: 'inline',
    label: 'Carregando dados',
  },
};

export const Page: Story = {
  args: {
    variant: 'page',
    label: 'Carregando painel',
  },
};
