import type { Meta, StoryObj } from '@storybook/react';
import Calendar from '.';

const meta = {
  title: '3 Components/Atoms/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    events: [
      {
        title: 'An example title',
        id: 1,
        start: new Date('2023-10-10'),
        end: new Date('2023-10-10'),
      },
    ],
  },
} satisfies Story;
