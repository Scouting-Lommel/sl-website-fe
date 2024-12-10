import type { Meta, StoryObj } from '@storybook/react';
import { Default as imageStory } from '@/components/atoms/Image/Image.stories';
import Leaders from '.';

const meta: Meta<typeof Leaders> = {
  title: '3 Components/Organisms/Leaders',
  component: Leaders,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leaders: [
      {
        attributes: {
          firstName: 'Akela',
          lastName: '',
          image: {
            data: {
              attributes: imageStory.args!.data!,
            },
          },
        },
      },
      {
        attributes: {
          firstName: 'Rikki Tikki',
          lastName: 'Tavi',
          image: {
            data: {
              attributes: imageStory.args!.data!,
            },
          },
        },
      },
      {
        attributes: {
          firstName: 'De',
          lastName: 'Roy',
        },
      },
    ],
  },
};
