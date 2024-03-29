import type { Meta, StoryObj } from '@storybook/react';
import FooterDisclosure from '.';

const meta = {
  title: '3 Components/Molecules/FooterDisclosure',
  component: FooterDisclosure,
  tags: ['autodocs'],
  argTypes: {
    siteName: {
      control: { type: 'text' },
      description: 'The name of the site',
    },
  },
} satisfies Meta<typeof FooterDisclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    siteName: 'Scouting Sint-Pieter Lommel',
  },
} satisfies Story;
