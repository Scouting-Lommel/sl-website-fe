import type { Meta, StoryObj } from '@storybook/react';
import RegisterChild from '.';

const meta = {
  title: '3 Components/Molecules/RegisterChild',
  component: RegisterChild,
  tags: ['autodocs'],
  argTypes: {
    first: {
      control: { type: 'boolean' },
      description: 'If it is the first child',
    },
    index: {
      control: { type: 'number' },
      description: 'The index of the child',
    },
  },
} satisfies Meta<typeof RegisterChild>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    index: 1,
    first: true,
  },
} satisfies Story;
