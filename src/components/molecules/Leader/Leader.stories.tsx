import type { Meta, StoryObj } from '@storybook/react';
import Leader from '.';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';
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
} satisfies Meta<typeof LeaderItemContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    firstName: 'Example',
    lastName: 'Name',
    image: {
      data: {
        attributes: imagedefault.args.data,
      },
    },
  },
} satisfies Story;
