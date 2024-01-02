import type { Meta, StoryObj } from '@storybook/react';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';
import Leader from '.';
import { Leader as LeaderProps } from './types';

const LeaderItemContainer = (args: LeaderProps) => {
  const styles = { width: '11.5rem' };

  return (
    <div style={styles}>
      <Leader {...args} />
    </div>
  );
};

const meta = {
  title: '3 Components/Molecules/Leader',
  component: LeaderItemContainer,
  tags: ['autodocs'],
  argTypes: {
    firstName: {
      control: { type: 'text' },
      description: 'The first name of the leader',
    },
    lastName: {
      control: { type: 'text' },
      description: 'The last name of the leader',
    },
    image: {
      control: { type: 'object' },
      description: 'The image of the leader',
    },
  },
} satisfies Meta<typeof LeaderItemContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    active: true,
    firstName: 'Example',
    lastName: 'Name',
    image: {
      data: {
        attributes: imagedefault.args.data,
      },
    },
  },
} satisfies Story;
