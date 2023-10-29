import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from '.';

const meta = {
  title: '3 Components/molecules/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Example title',
    content: 'Example content',
  },
} satisfies Story;
