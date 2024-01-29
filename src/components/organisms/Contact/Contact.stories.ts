import type { Meta, StoryObj } from '@storybook/react';
import Contact from '.';

const meta = {
  title: '3 Components/Organisms/Contact',
  component: Contact,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title',
    },
    subjectOptions: {
      control: { type: 'object' },
      description: 'The options for contact',
    },
  },
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
