import type { Meta, StoryObj } from '@storybook/react';
import File from '.';

const meta = {
  title: '3 Components/molecules/File',
  component: File,
  tags: ['autodocs'],
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: { ext: '.pdf', url: 'randomurl.com', name: 'Test name', size: 10 },
} satisfies Story;
