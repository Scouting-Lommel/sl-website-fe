import type { Meta, StoryObj } from '@storybook/react';
import BlockContainer from '.';

const meta: Meta<typeof BlockContainer> = {
  title: '3 Components/Atoms/BlockContainer',
  component: BlockContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'dark',
    orientation: 'default',
    slug: 'storybook',
    children: 'Block content',
  },
};
