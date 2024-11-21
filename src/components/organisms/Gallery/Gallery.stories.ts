import type { Meta, StoryObj } from '@storybook/react';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';
import Gallery from '.';

const meta = {
  title: '3 Components/Organisms/Gallery',
  component: Gallery,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title',
    },
    initialItems: {
      control: { type: 'number' },
      description: 'The number of initial items',
    },
    images: {
      control: { type: 'text' },
      description: 'The images',
    },
  },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Example title',
    initialItems: 3,
    images: {
      data: [
        {
          attributes: imagedefault.args!.data!,
        },
        {
          attributes: imagedefault.args!.data!,
        },
        {
          attributes: imagedefault.args!.data!,
        },
        {
          attributes: imagedefault.args!.data!,
        },
        {
          attributes: imagedefault.args!.data!,
        },
        {
          attributes: imagedefault.args!.data!,
        },
      ],
    },
  },
} satisfies Story;
