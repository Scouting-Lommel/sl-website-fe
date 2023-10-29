import type { Meta, StoryObj } from '@storybook/react';
import Map from '.';

const meta = {
  title: '3 Components/Organisms/Map',
  component: Map,
  tags: ['autodocs'],
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: { title: 'Example title' },
} satisfies Story;
