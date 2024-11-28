import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '.';

const meta: Meta<typeof Checkbox> = {
  title: '3 Components/Atoms/Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'checkbox',
    label: 'Ik ga akkoord met [de algemene voorwaarden](/terms-and-conditions).',
  },
};

export const HasError: Story = {
  args: {
    id: 'checkbox',
    label: 'Ik ga akkoord met [de algemene voorwaarden](/terms-and-conditions).',
    error: 'Dit veld is verplicht.',
  },
};
