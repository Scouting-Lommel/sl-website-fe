import type { Meta, StoryObj } from '@storybook/react';
import CallToAction from '.';

const meta = {
  title: '3 Components/Molecules/CallToAction',
  component: CallToAction,
  tags: ['autodocs'],
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
