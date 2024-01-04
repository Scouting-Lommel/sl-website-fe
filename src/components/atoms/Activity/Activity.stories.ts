import type { Meta, StoryObj } from '@storybook/react';
import Activity from '.';

const meta = {
  title: '3 Components/Atoms/Activity',
  component: Activity,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'The name of the activity',
      control: { type: 'text' },
    },
    startDate: {
      description: 'The start date of the activity',
      control: { type: 'date' },
    },
    startTime: {
      description: 'The start time of the activity',
      control: { type: 'text' },
    },
    endDate: {
      description: 'The end date of the activity',
      control: { type: 'date' },
    },
    endTime: {
      description: 'The end time of the activity',
      control: { type: 'text' },
    },
    description: {
      description: 'The description of the activity',
      control: { type: 'text' },
    },
    uid: {
      description: 'the ID of the activity',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Activity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'An example title',
    startDate: '09/30/2000',
    endDate: '09/30/2000',
    startTime: '14:00',
    endTime: '15:30',
    description: 'An example description for an activity',
    uid: '1',
  },
} satisfies Story;

export const DifferentDates = {
  args: {
    title: 'An example title',
    startDate: '09/30/2000',
    endDate: '10/15/2000',
    startTime: '10:00',
    endTime: '15:30',
    description: 'An example description for an activity',
    uid: '1',
  },
} satisfies Story;
