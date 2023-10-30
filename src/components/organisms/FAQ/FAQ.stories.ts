import type { Meta, StoryObj } from '@storybook/react';
import FAQ from '.';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';
import { Default as buttondefault } from '@/components/atoms/Button/Button.stories';

const meta = {
  title: '3 Components/Organisms/FAQ',
  component: FAQ,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title',
    },
    faqItems: {
      control: { type: 'object' },
      description: 'The items in the faq',
    },
  },
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
          image: { data: { attributes: imagedefault.args.data } },
          callToAction: buttondefault.args,
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
