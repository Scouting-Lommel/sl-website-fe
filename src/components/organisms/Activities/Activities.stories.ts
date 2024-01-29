import type { Meta, StoryObj } from '@storybook/react';
import Activities from '.';

const meta = {
  title: '3 Components/Organisms/Activities',
  component: Activities,
  tags: ['autodocs'],
  argTypes: {
    initialItems: {
      control: { type: 'number' },
      description: 'The number of activities to show',
    },
    activities: {
      control: { type: 'object' },
      description: 'The activities',
    },
  },
} satisfies Meta<typeof Activities>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    initialItems: 3,
    activities: [
      {
        attributes: {
          title: 'An example title',
          startDate: '09/30/2000',
          endDate: '09/30/2000',
          startTime: '14:00',
          endTime: '15:30',
          description: 'An example description for an activity',
        },
      },
      {
        attributes: {
          title: 'Another example title',
          startDate: '09/30/2000',
          endDate: '10/15/2000',
          startTime: '12:00',
          endTime: '12:00',
          description: 'Another example description for an activity',
        },
      },
    ],
  },
} satisfies Story;
