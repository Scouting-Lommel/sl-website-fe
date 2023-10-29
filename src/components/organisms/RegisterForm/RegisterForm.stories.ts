import type { Meta, StoryObj } from '@storybook/react';
import Register from '.';

const meta = {
  title: '3 Components/Organisms/RegisterForm',
  component: Register,
  tags: ['autodocs'],
} satisfies Meta<typeof Register>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    bankAccount: 'BE example bank account',
    leaderPrice: 55,
    childPrice: 65,
  },
} satisfies Story;
