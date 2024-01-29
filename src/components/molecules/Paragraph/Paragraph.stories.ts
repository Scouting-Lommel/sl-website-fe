import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from '.';

const meta = {
  title: '3 Components/Molecules/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the paragraph',
    },
    content: {
      control: { type: 'text' },
      description: 'The content of the paragraph',
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Example title',
    content: 'Example content',
  },
} satisfies Story;
