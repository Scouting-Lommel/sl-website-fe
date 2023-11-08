import type { Meta, StoryObj } from '@storybook/react';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';
import Leaders from '.';

const meta = {
  title: '3 Components/Organisms/Leaders',
  component: Leaders,
  tags: ['autodocs'],
  argTypes: {
    leaders: {
      control: { type: 'object' },
      description: 'The leaders',
    },
  },
} satisfies Meta<typeof Leaders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    leaders: [
      {
        attributes: {
          active: true,
          firstName: 'Example',
          lastName: 'Name',
          image: {
            data: {
              attributes: imagedefault.args.data,
            },
          },
        },
      },
      {
        attributes: {
          active: true,
          firstName: 'Example',
          lastName: 'Name',
          image: {
            data: {
              attributes: imagedefault.args.data,
            },
          },
        },
      },
      {
        attributes: {
          active: true,
          firstName: 'Example',
          lastName: 'Name',
          image: {
            data: {
              attributes: imagedefault.args.data,
            },
          },
        },
      },
    ],
  },
} satisfies Story;
