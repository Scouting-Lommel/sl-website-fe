import type { Meta, StoryObj } from '@storybook/react';
import { DropdownItem as DropdownItemProps } from './types';
import DropdownItem from '.';

const DropdownItemContainer = (props: DropdownItemProps): JSX.Element => {
  return (
    <ul style={{ listStyleType: 'none', paddingLeft: 0, width: '12rem' }}>
      <DropdownItem {...props} />
    </ul>
  );
};

const meta: Meta<typeof DropdownItemContainer> = {
  title: '3 Components/Atoms/DropdownItem',
  component: DropdownItemContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Akabe',
    description: 'Anders KAn BEst!',
    href: '/#',
  },
};
