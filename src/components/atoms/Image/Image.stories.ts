import type { Meta, StoryObj } from '@storybook/react';
import Image from '.';

const meta: Meta<typeof Image> = {
  title: '3 Components/Atoms/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    loadingStrategy: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
};
