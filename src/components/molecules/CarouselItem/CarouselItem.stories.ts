import type { Meta, StoryObj } from '@storybook/react';
import CarouselItem from '.';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';

const meta = {
  title: '3 Components/Molecules/CarouselItem',
  component: CarouselItem,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'text' },
      description: 'The name on the carouesl item',
    },
    slug: {
      control: { type: 'text' },
      description: 'The slug of the item',
    },
    logo: {
      control: { type: 'object' },
      description: 'The logo of the carousel item',
    },
  },
} satisfies Meta<typeof CarouselItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    name: 'Test name',
    slug: 'Test slug',
    logo: {
      data: {
        attributes: imagedefault.args.data,
      },
    },
  },
} satisfies Story;
