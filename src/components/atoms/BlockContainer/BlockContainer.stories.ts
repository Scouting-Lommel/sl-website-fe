import type { Meta, StoryObj } from '@storybook/react';
import BlockContainer from '.';

const meta = {
  title: '3 Components/Atoms/BlockContainer',
  component: BlockContainer,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant of the container',
      control: { type: 'select' },
    },
    orientation: {
      description: 'The orientation of the container',
      control: { type: 'select' },
    },
    slug: {
      description: 'The slug of the container',
      control: { type: 'text' },
    },
    children: {
      description: 'The children within the container',
      control: { type: 'any' },
    },
    cta: {
      description: 'The callToAction on top of the container',
      control: { type: 'object' },
    },
    socialsCta: {
      description: 'The callToAction with socials on the container',
      control: { type: 'object' },
    },
    bgImage: {
      description: 'The background image of the container',
      control: { type: 'object' },
    },
    modSmallPadding: {
      description: 'If small padding should be applied',
      control: { type: 'boolean' },
    },
    modMargin: {
      description: 'If special margins should be applied',
      control: { type: 'boolean' },
    },
    title: {
      description: 'The title on the container',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof BlockContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    variant: 'dark',
    orientation: 'default',
    slug: 'storybook',
    children: 'Block content',
  },
} satisfies Story;
