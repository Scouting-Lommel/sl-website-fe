import type { Meta, StoryObj } from '@storybook/react';
import Activity from '.';

const meta: Meta<typeof Activity> = {
  title: '3 Components/Atoms/Activity',
  component: Activity,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'An example title',
    startDate: '09/30/2000',
    endDate: '09/30/2000',
    startTime: '14:00',
    endTime: '15:30',
    description: 'An example description for an activity',
  },
};

export const DifferentDates: Story = {
  args: {
    title: 'An example title',
    startDate: '09/30/2000',
    endDate: '10/15/2000',
    startTime: '10:00',
    endTime: '15:30',
    description: 'An example description for an activity',
  },
};
