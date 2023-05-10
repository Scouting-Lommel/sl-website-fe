import type { Meta, StoryObj } from '@storybook/react';
import BlockContainer from '.';

const meta = {
  title: '3 Components/Atoms/BlockContainer',
  component: BlockContainer,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' } },
    orientation: { control: { type: 'select' } },
  },
} satisfies Meta<typeof BlockContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    variant: 'dark',
    orientation: 'default',
    slug: 'storybook',
    modCtaSocials: false,
  },
} satisfies Story;
