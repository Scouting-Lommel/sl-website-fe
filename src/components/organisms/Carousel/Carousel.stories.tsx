import type { Meta, StoryObj } from '@storybook/react';
import { Default as imageStory } from '@/components/atoms/Image/Image.stories';
import Carousel from '.';

const meta: Meta<typeof Carousel> = {
  title: '3 Components/Organisms/Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    carouselItems: {
      data: [
        {
          attributes: {
            logo: {
              data: {
                attributes: imageStory.args!.data!,
              },
            },
            name: 'Kapoenen',
            slug: 'kapoenen',
          },
        },
        {
          attributes: {
            logo: {
              data: {
                attributes: imageStory.args!.data!,
              },
            },
            name: 'Welpen',
            slug: 'welpen',
          },
        },
        {
          attributes: {
            logo: {
              data: {
                attributes: imageStory.args!.data!,
              },
            },
            name: 'Akabe',
            slug: 'akabe',
          },
        },
        {
          attributes: {
            logo: {
              data: {
                attributes: imageStory.args!.data!,
              },
            },
            name: 'Jonggivers',
            slug: 'jonggivers',
          },
        },
        {
          attributes: {
            logo: {
              data: {
                attributes: imageStory.args!.data!,
              },
            },
            name: 'Givers',
            slug: 'givers',
          },
        },
        {
          attributes: {
            logo: {
              data: {
                attributes: imageStory.args!.data!,
              },
            },
            name: 'Jin',
            slug: 'jin',
          },
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#4d6e5a' }}>
        <Story />
      </div>
    ),
  ],
};
