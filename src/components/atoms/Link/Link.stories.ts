import type { Meta, StoryObj } from '@storybook/react';
import Link from '.';

const meta: Meta<typeof Link> = {
  title: '3 Components/Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['link1', 'link2', 'link3'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "I'm a link!",
    href: '#/',
    variant: 'link1',
  },
};
