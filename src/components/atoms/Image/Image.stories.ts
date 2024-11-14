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
      hash: 'groepsfoto_75dfd0948c',
      alternativeText: 'groepsfoto.png',
      caption: 'groepsfoto.png',
    },
    loadingStrategy: 'lazy',
  },
} satisfies Story;
