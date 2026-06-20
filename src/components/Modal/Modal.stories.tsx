import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Componentes/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    open: true,
    title: 'Detalhes da solicitação',
    children: <p>A solicitação foi aprovada pela equipe financeira.</p>,
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {};

export const Interactive: Story = {
  render: () => {
    const Example = () => {
      const [open, setOpen] = useState(true);

      return (
        <>
          <Button onClick={() => setOpen(true)}>Abrir modal</Button>
          <Modal
            open={open}
            onOpenChange={setOpen}
            title="Detalhes da solicitação"
            footer={<Button onClick={() => setOpen(false)}>Fechar</Button>}
          >
            <p>Revise os detalhes da solicitação aqui.</p>
          </Modal>
        </>
      );
    };

    return <Example />;
  },
};
