import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormField } from './FormField';
import { Input } from '../Input';

const meta: Meta<typeof FormField> = {
  title: 'Componentes/FormField',
  component: FormField,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    label: 'Nome do solicitante',
    helperText: 'Use a pessoa responsável pela solicitação.',
  },
  render: (args) => (
    <FormField {...args}>
      {({ fieldId, describedBy }) => <Input id={fieldId} aria-describedby={describedBy} />}
    </FormField>
  ),
};
