import type { Meta, StoryObj } from '@storybook/react';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';
import Carousel from '.';

const meta: Meta<typeof Carousel> = {
  title: '3 Components/Organisms/Carousel',
  component: Carousel,
  argTypes: {
    carouselItems: {
      control: { type: 'object' },
      description: 'The items in the carousel',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
};
