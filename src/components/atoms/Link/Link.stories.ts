import type { Meta, StoryObj } from '@storybook/react';
import Link from '.';

const meta = {
  title: '3 Components/Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['link1', 'link2', 'link3'] },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "I'm a link!",
    href: '#/',
    variant: 'link1',
  },
} satisfies Story;
