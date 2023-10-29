import type { Meta, StoryObj } from '@storybook/react';
import Gallery from '.';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';

const meta = {
  title: '3 Components/Organisms/Gallery',
  component: Gallery,
  tags: ['autodocs'],
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
          attributes: imagedefault.args.data,
        },
        {
          attributes: imagedefault.args.data,
        },
        {
          attributes: imagedefault.args.data,
        },
        {
          attributes: imagedefault.args.data,
        },
        {
          attributes: imagedefault.args.data,
        },
        {
          attributes: imagedefault.args.data,
        },
      ],
    },
  },
} satisfies Story;
