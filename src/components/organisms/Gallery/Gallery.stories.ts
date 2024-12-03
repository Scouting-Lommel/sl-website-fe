import type { Meta, StoryObj } from '@storybook/react';
import { Default as imageStory } from '@/components/atoms/Image/Image.stories';
import Gallery from '.';

const meta: Meta<typeof Gallery> = {
  title: '3 Components/Organisms/Gallery',
  component: Gallery,
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Example title',
    initialItems: 3,
    images: {
      data: [
        {
          attributes: imageStory.args!.data!,
        },
        {
          attributes: imageStory.args!.data!,
        },
        {
          attributes: imageStory.args!.data!,
        },
        {
          attributes: imageStory.args!.data!,
        },
        {
          attributes: imageStory.args!.data!,
        },
        {
          attributes: imageStory.args!.data!,
        },
      ],
    },
  },
};
