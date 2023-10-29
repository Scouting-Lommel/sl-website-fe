import type { Meta, StoryObj } from '@storybook/react';
import RegisterChild from '.';

const meta = {
  title: '3 Components/molecules/RegisterChild',
  component: RegisterChild,
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterChild>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    index: 1,
    first: true,
  },
} satisfies Story;
