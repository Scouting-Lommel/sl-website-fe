import type { Meta, StoryObj } from '@storybook/react';
import Tarifs from '.';

const meta: Meta<typeof Tarifs> = {
  title: '3 Components/Organisms/Tarifs',
  component: Tarifs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
};
