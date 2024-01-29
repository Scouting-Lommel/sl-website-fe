import type { Meta, StoryObj } from '@storybook/react';
import Tarif from '.';

const meta = {
  title: '3 Components/Molecules/Tarif',
  component: Tarif,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'The name of the tarif',
    },
    example: {
      control: { type: 'text' },
      description: 'The example on the tarif',
    },
    minimumPrice: {
      control: { type: 'number' },
      description: 'The minimumprice of the tarif',
    },
    dayPrice: {
      control: { type: 'number' },
      description: 'The dayprice of the tarif',
    },
  },
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
