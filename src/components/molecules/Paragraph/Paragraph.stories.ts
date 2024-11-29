import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from '.';

const meta: Meta<typeof Paragraph> = {
  title: '3 Components/Molecules/Paragraph',
  component: Paragraph,
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Example title',
    content: 'Example content',
  },
};
