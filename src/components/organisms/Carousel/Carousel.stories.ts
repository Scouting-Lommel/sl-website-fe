import type { Meta, StoryObj } from '@storybook/react';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';
import Carousel from '.';

const meta = {
  title: '3 Components/Organisms/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    carouselItems: {
      control: { type: 'object' },
      description: 'The items in the carousel',
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    carouselItems: {
      data: [
        {
          attributes: {
            logo: {
              data: {
                attributes: imagedefault.args!.data!,
              },
            },
            name: 'Example name',
            slug: 'Example slug',
          },
        },
        {
          attributes: {
            logo: {
              data: {
                attributes: imagedefault.args!.data!,
              },
            },
            name: 'Another example name',
            slug: 'Another example slug',
          },
        },
      ],
    },
  },
} satisfies Story;
