import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: '3 Components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: "I'm a button!",
    variant: 'primary',
    modSmall: false,
  },
} satisfies Story;

export const LinkButton = {
  args: {
    label: "I'm a button!",
    variant: 'primary',
    modSmall: false,
    href: '#',
  },
} satisfies Story;
