import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../tests/test-utils/render';
import { Button } from '../Button';
import { Modal } from './Modal';

function ModalHarness({ overlayDismiss = false }: { overlayDismiss?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Abrir modal</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Detalhes da solicitação"
        closeOnOverlayClick={overlayDismiss}
        footer={<Button onClick={() => setOpen(false)}>Fechar</Button>}
      >
        <button type="button">Ação principal</button>
      </Modal>
    </div>
  );
}

describe('Modal', () => {
  it('opens and closes', async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await user.click(screen.getByRole('button', { name: 'Abrir modal' }));
    expect(screen.getByRole('dialog', { name: 'Detalhes da solicitação' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Fechar modal' }));
    expect(screen.queryByRole('dialog', { name: 'Detalhes da solicitação' })).not.toBeInTheDocument();
  });

  it('closes on Escape and restores focus', async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    const opener = screen.getByRole('button', { name: 'Abrir modal' });
    await user.click(opener);
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByRole('button', { name: 'Fechar modal' })).toHaveFocus();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(opener).toHaveFocus();
  });

  it('keeps focus within the dialog', async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await user.click(screen.getByRole('button', { name: 'Abrir modal' }));
    const closeButton = screen.getByRole('button', { name: 'Fechar modal' });
    const primaryAction = screen.getByRole('button', { name: 'Ação principal' });
    const footerClose = screen.getByRole('button', { name: 'Fechar' });

    expect(closeButton).toHaveFocus();
    await user.tab();
    expect(primaryAction).toHaveFocus();
    await user.tab();
    expect(footerClose).toHaveFocus();
    await user.tab();
    expect(closeButton).toHaveFocus();
  });

  it('does not close on overlay click unless enabled', async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await user.click(screen.getByRole('button', { name: 'Abrir modal' }));
    await user.click(document.querySelector('[role="dialog"]')!.parentElement!);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes on overlay click when enabled', async () => {
    const user = userEvent.setup();
    render(<ModalHarness overlayDismiss />);

    await user.click(screen.getByRole('button', { name: 'Abrir modal' }));
    await user.click(document.querySelector('[role="dialog"]')!.parentElement!);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('locks body scrolling while open', async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await user.click(screen.getByRole('button', { name: 'Abrir modal' }));
    expect(document.body.style.overflow).toBe('hidden');
  });
});
