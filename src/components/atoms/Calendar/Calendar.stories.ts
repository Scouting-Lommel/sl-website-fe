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
        start: new Date('09/30/2023'),
        end: new Date('10/20/2023'),
      },
    ],
  },
} satisfies Story;
