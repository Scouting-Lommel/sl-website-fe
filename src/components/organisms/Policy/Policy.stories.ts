import type { Meta, StoryObj } from '@storybook/react';
import Policy from '.';

const meta = {
  title: '3 Components/Organisms/Policy',
  component: Policy,
  tags: ['autodocs'],
} satisfies Meta<typeof Policy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Example title',
    sections: [
      {
        title: 'Example section title',
        content: 'Example section content',
      },
      {
        title: 'Another example section title',
        content: 'Another example section content',
      },
    ],
  },
} satisfies Story;
