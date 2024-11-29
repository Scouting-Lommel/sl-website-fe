import type { Meta, StoryObj } from '@storybook/react';
import { Default as buttondefault } from '@/components/atoms/Button/Button.stories';
import { Default as imagedefault } from '@/components/atoms/Image/Image.stories';
import FAQ from '.';

const meta: Meta<typeof FAQ> = {
  title: '3 Components/Organisms/FAQ',
  component: FAQ,
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Example title',
    bottomText: 'Niet gevonden wat je zocht? Neem gerust contact met ons op.',
    faqItems: [
      {
        attributes: {
          question: 'A test question',
          answer: 'A test answer',
          image: { data: { attributes: imagedefault.args!.data! } },
          callToAction: buttondefault.args,
        },
      },
      {
        attributes: {
          question: 'Another test question',
          answer: 'Another test answer',
          image: undefined,
          callToAction: undefined,
        },
      },
    ],
  },
};
