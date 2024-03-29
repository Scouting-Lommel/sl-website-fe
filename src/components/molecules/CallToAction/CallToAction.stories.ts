import type { Meta, StoryObj } from '@storybook/react';
import CallToAction from '.';

const meta = {
  title: '3 Components/Molecules/CallToAction',
  component: CallToAction,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the cta',
    },
    intro: {
      control: { type: 'text' },
      description: 'The description of the cta',
    },
    ctaLabel: {
      control: { type: 'text' },
      description: 'The label on the cta button',
    },
    ctaLink: {
      control: { type: 'text' },
      description: 'The action of the cta button',
    },
  },
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Al ingeschreven?',
    intro: 'Schrijf je in via onze website',
    ctaLabel: 'Inschrijven',
    ctaLink: '/inschrijven',
  },
} satisfies Story;
