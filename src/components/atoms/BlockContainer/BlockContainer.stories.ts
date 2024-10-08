import type { Meta, StoryObj } from '@storybook/react';
import BlockContainer from '.';

const meta = {
  title: '3 Components/Atoms/BlockContainer',
  component: BlockContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof BlockContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    variant: 'dark',
    orientation: 'default',
    slug: 'storybook',
    children: 'Block content',
  },
} satisfies Story;
