import type { Meta, StoryObj } from '@storybook/react';
import Map from '.';

const meta: Meta<typeof Map> = {
  title: '3 Components/Organisms/Map',
  component: Map,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Example title' },
};
