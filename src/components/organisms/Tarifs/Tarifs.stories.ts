import type { Meta, StoryObj } from '@storybook/react';
import Tarifs from '.';

const meta = {
  title: '3 Components/Organisms/Tarifs',
  component: Tarifs,
  tags: ['autodocs'],
  argTypes: {
    tarifs: {
      control: { type: 'object' },
      description: 'The tarifs',
    },
    cta: {
      control: { type: 'object' },
      description: 'The cta',
    },
  },
} satisfies Meta<typeof Tarifs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    tarifs: [
      {
        attributes: {
          name: 'Example name',
          example: 'Example tarif math',
          minimumPrice: 100,
          dayPrice: 5,
        },
      },
      {
        attributes: {
          name: 'Another example name',
          example: 'Another example tarif math',
          minimumPrice: 400,
          dayPrice: 55,
        },
      },
    ],
    cta: {
      title: 'Example cta',
      intro: 'Example intro',
      ctaLabel: 'Example text',
      ctaLink: '#',
    },
  },
} satisfies Story;
