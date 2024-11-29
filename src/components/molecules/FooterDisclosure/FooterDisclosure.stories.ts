import type { Meta, StoryObj } from '@storybook/react';
import FooterDisclosure from '.';

const meta: Meta<typeof FooterDisclosure> = {
  title: '3 Components/Molecules/FooterDisclosure',
  component: FooterDisclosure,
  argTypes: {
    siteName: {
      control: { type: 'text' },
      description: 'The name of the site',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    siteName: 'Scouting Sint-Pieter Lommel',
  },
};
