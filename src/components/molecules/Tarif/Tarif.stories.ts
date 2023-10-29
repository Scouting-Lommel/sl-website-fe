import type { Meta, StoryObj } from '@storybook/react';
import Tarif from '.';

const meta = {
  title: '3 Components/molecules/Tarif',
  component: Tarif,
  tags: ['autodocs'],
} satisfies Meta<typeof Tarif>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    name: 'Example name',
    example: 'Example tarif math',
    minimumPrice: 100,
    dayPrice: 5,
  },
} satisfies Story;
