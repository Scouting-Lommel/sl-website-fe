import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: '3 Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    modSmall: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    variant: 'primary',
    label: "I'm a button!",
    loading: false,
    modSmall: false,
  },
} satisfies Story;

export const LinkButton = {
  args: {
    variant: 'primary',
    label: "I'm a button!",
    href: '#',
    loading: false,
    modSmall: false,
  },
} satisfies Story;
