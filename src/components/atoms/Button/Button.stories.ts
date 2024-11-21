import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: '3 Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    modSmall: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    label: "I'm a button!",
    loading: false,
    modSmall: false,
  },
};

export const LinkButton: Story = {
  args: {
    variant: 'primary',
    label: "I'm a button!",
    href: '#',
    loading: false,
    modSmall: false,
  },
};
