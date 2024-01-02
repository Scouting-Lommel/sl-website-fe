import type { Meta, StoryObj } from '@storybook/react';
import Loader from '.';

const meta = {
  title: '3 Components/Atoms/Loader',
  component: Loader,
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
} satisfies Story;
