import type { Meta, StoryObj } from '@storybook/react';
import Banner from '.';

const meta: Meta<typeof Banner> = {
  title: '3 Components/Atoms/Banner',
  component: Banner,
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'success',
    children: 'De status van je inschrijving is gewijzigd.',
  },
};
