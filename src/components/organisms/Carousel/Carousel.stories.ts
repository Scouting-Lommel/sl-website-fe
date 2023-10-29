import type { Meta, StoryObj } from '@storybook/react';
import Carousel from '.';

const meta = {
  title: '3 Components/organisms/Carousel',
  component: Carousel,
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    carouselItems: {
      data: [
        {
          attributes: {
            name: 'Test name',
            slug: 'Test slug',
            logo: {
              data: {
                attributes: {
                  name: 'groepsfoto.png',
                  width: 1949,
                  height: 1240,
                  url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445052/groepsfoto_75dfd0948c.png',
                  alternativeText: 'groepsfoto.png',
                  caption: 'groepsfoto.png',
                  formats: {
                    small: {
                      width: 500,
                      height: 318,
                      url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445049/small_groepsfoto_75dfd0948c.png',
                    },
                    medium: {
                      width: 750,
                      height: 477,
                      url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445050/medium_groepsfoto_75dfd0948c.png',
                    },
                    large: {
                      width: 1000,
                      height: 636,
                      url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445054/large_groepsfoto_75dfd0948c.png',
                    },
                  },
                },
              },
            },
          },
        },
      ],
    },
  },
} satisfies Story;
