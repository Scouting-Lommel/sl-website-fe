import type { Meta, StoryObj } from '@storybook/react';
import File from '.';

const meta: Meta<typeof File> = {
  title: '4 Forms/Elements/File',
  component: File,
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'file',
    name: 'file',
    label: 'Upload een bestand',
  },
};

export const HasError: Story = {
  args: {
    id: 'file',
    name: 'file',
    label: 'Upload een bestand',
    error: 'Dit veld is verplicht.',
    required: true,
  },
};
