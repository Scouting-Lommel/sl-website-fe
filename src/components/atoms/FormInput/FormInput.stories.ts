import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta = {
  title: '3 Components/Atoms/FormInput',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: 'Test label',
    type: 'text',
    id: 'customID',
    name: 'customName',
    required: true,
  },
} satisfies Story;
