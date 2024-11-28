import type { Meta, StoryObj } from '@storybook/react';
import File from '.';

const meta: Meta<typeof File> = {
  title: '3 Components/Atoms/Forms/File',
  component: File,
  tags: ['autodocs'],
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
  },
};
