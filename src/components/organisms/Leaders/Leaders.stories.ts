import type { Meta, StoryObj } from '@storybook/react';
import Leaders from '.';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';

const meta = {
  title: '3 Components/Organisms/Leaders',
  component: Leaders,
  tags: ['autodocs'],
} satisfies Meta<typeof Leaders>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    leaders: [
      {
        attributes: {
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
