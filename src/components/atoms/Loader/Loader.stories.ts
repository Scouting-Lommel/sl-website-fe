import type { Meta, StoryObj } from '@storybook/react';
import Loader from '.';

const meta: Meta<typeof Loader> = {
  title: '3 Components/Atoms/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    modLabelVisible: false,
  },
};
