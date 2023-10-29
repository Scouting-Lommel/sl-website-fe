import type { Meta, StoryObj } from '@storybook/react';
import FAQ from '.';

const meta = {
  title: '3 Components/organisms/FAQ',
  component: FAQ,
  tags: ['autodocs'],
} satisfies Meta<typeof FAQ>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Example title',
    faqItems: [
      {
        attributes: {
          question: 'A test question',
          answer: 'A test answer',
          image: undefined,
          callToAction: undefined,
          finalQuestion: false,
        },
      },
      {
        attributes: {
          question: 'Another test question',
          answer: 'Another test answer',
          image: undefined,
          callToAction: undefined,
          finalQuestion: true,
        },
      },
    ],
  },
} satisfies Story;
