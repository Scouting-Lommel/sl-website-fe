import type { Meta, StoryObj } from '@storybook/react';
import Image from '.';

const meta = {
  title: '3 Components/Atoms/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'The data for the image',
      control: { type: 'object' },
    },
    loadingStrategy: {
      description: 'How the image should be loaded',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    data: {
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
    loadingStrategy: 'lazy',
  },
} satisfies Story;
