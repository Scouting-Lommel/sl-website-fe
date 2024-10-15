import type { Meta, StoryObj } from '@storybook/react';
import FAQItem from '.';
import { Default as buttondefault } from '@/components/atoms/Button/Button.stories';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';

const meta = {
  title: '3 Components/Molecules/FaqItem',
  component: FAQItem,
  tags: ['autodocs'],
  argTypes: {
    question: {
      control: { type: 'text' },
      description: 'The question',
    },
    answer: {
      control: { type: 'text' },
      description: 'The answer',
    },
    image: {
      control: { type: 'object' },
      description: 'The image in the answer',
    },
    callToAction: {
      control: { type: 'object' },
      description: 'The button in the answer',
    },
  },
} satisfies Meta<typeof FAQItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    question: 'A test question',
    answer: 'A test answer',
    image: { data: { attributes: imagedefault.args.data } },
    callToAction: buttondefault.args,
  },
} satisfies Story;
