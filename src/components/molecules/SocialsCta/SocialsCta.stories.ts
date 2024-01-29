import type { Meta, StoryObj } from '@storybook/react';
import SocialsCta from '.';

const meta = {
  title: '3 Components/Molecules/SocialsCta',
  component: SocialsCta,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The text of the cta',
    },
    socialItems: {
      control: { type: 'object' },
      description: 'All social items',
    },
  },
} satisfies Meta<typeof SocialsCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Volg ons op sociale media!',
    socialItems: [
      { title: 'Facebook', link: 'https://facebook.com', icon: 'facebook' },
      { title: 'Instagram', link: 'https://instagram.com', icon: 'instagram' },
      { title: 'TikTok', link: 'https://tiktok.com', icon: 'tiktok' },
    ],
  },
} satisfies Story;
