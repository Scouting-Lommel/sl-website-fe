import type { Meta, StoryObj } from '@storybook/react';
import FooterHead from '.';

const meta = {
  title: '3 Components/Molecules/FooterHead',
  component: FooterHead,
  tags: ['autodocs'],
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
