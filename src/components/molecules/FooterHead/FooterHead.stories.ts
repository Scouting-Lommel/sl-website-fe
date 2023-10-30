import type { Meta, StoryObj } from '@storybook/react';
import FooterHead from '.';

const meta = {
  title: '3 Components/Molecules/FooterHead',
  component: FooterHead,
  tags: ['autodocs'],
  argTypes: {
    siteName: {
      control: { type: 'text' },
      description: 'The name of the site',
    },
    vatNumber: {
      control: { type: 'text' },
      description: 'The vat number',
    },
    groupNumber: {
      control: { type: 'text' },
      description: 'The number of the group',
    },
  },
} satisfies Meta<typeof FooterHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    siteName: 'Scouting Sint-Pieter Lommel',
    vatNumber: 'BE 0410.966.531',
    groupNumber: 'L1205G',
  },
} satisfies Story;
