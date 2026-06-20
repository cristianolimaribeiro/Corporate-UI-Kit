import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { Button } from '../Button';
import { Badge } from '../Badge';

const meta: Meta<typeof Card> = {
  title: 'Componentes/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    header: <strong>Visão geral</strong>,
    footer: <Button size="sm">Ver detalhes</Button>,
    children: <p>O conteúdo do cartão vai aqui.</p>,
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    header: (
      <>
        <strong>Solicitação #2042</strong>
        <Badge variant="success">Aprovada</Badge>
      </>
    ),
    children: <p>Clique para abrir os detalhes da solicitação.</p>,
  },
};
