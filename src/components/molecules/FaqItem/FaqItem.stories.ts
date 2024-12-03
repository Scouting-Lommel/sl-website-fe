import type { Meta, StoryObj } from '@storybook/react';
import { Default as buttonStory } from '@/components/atoms/Button/Button.stories';
import { Default as imageStory } from '@/components/atoms/Image/Image.stories';
import FAQItem from '.';

const meta: Meta<typeof FAQItem> = {
  title: '3 Components/Molecules/FAQ Item',
  component: FAQItem,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    question: 'Is cereal considered a soup?',
    answer:
      "In traditional terms, soup is typically a dish composed of meat or vegetables in a broth or water, and it's often heated. Cereal, however, is usually served cold with milk, which is a dairy product rather than a broth. Despite their similarities of being liquid-based dishes served in bowls, the common consensus is that cereal is not considered a soup.",
    image: { data: { attributes: imageStory.args!.data! } },
    callToAction: buttonStory.args,
  },
};
