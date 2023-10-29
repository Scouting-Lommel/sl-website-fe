import type { Meta, StoryObj } from '@storybook/react';
import TableOfContents from '.';

const meta = {
  title: '3 Components/molecules/TableOfContents',
  component: TableOfContents,
  tags: ['autodocs'],
} satisfies Meta<typeof TableOfContents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    sections: [
      {
        title: 'Example title',
        content: 'Example content',
      },
      {
        title: 'Another example title',
        content: 'Example content',
      },
    ],
  },
} satisfies Story;
