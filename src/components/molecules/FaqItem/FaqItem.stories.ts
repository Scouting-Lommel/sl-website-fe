import type { Meta, StoryObj } from '@storybook/react';
import FAQItem from '.';

const meta = {
  title: '3 Components/molecules/FaqItem',
  component: FAQItem,
  tags: ['autodocs'],
} satisfies Meta<typeof FAQItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    question: 'A test question',
    answer: 'A test answer',
    image: undefined,
    callToAction: undefined,
    finalQuestion: false,
  },
} satisfies Story;
