import type { Meta, StoryObj } from '@storybook/react';
import { DropdownItem as DropdownItemProps } from './types';
import DropdownItem from '.';

const DropdownItemContainer = (args: DropdownItemProps) => {
  const styles = { listStyleType: 'none', paddingLeft: 0, width: '12rem' };

  return (
    <ul style={styles}>
      <DropdownItem {...args} />
    </ul>
  );
};

const meta = {
  title: '3 Components/Atoms/DropdownItem',
  component: DropdownItemContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownItemContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Akabe',
    description: 'Anders KAn BEst!',
    href: '/#',
  },
} satisfies Story;
