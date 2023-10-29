import type { Meta, StoryObj } from '@storybook/react';
import Contact from '.';

const meta = {
  title: '3 Components/organisms/Contact',
  component: Contact,
  tags: ['autodocs'],
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Example title',
    subjectOptions: [
      { label: 'Example lable', emailAddress: 'Test email' },
      { label: 'Takken', emailAddress: 'Takken' },
    ],
  },
} satisfies Story;
