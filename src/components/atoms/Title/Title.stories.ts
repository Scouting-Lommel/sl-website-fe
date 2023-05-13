import type { Meta, StoryObj } from '@storybook/react';
import Title from '.';

const meta = {
  title: '3 Components/Atoms/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    titleStyle: { control: { type: 'select' } },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: "I'm a title!",
    variant: 'h1',
    titleStyle: 'h1-alt',
    modLight: false,
    modAccent: false,
    modPrimary: false,
    modMarkup: false,
  },
} satisfies Story;
