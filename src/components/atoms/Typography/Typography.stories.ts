import type { Meta, StoryObj } from '@storybook/react';
import Typography from '.';

const meta: Meta<typeof Typography> = {
  title: '3 Components/Atoms/Typography',
  component: Typography,
  argTypes: {
    data: {
      control: { type: 'text' },
      description: 'The text',
    },
    modNoStyle: {
      control: { type: 'boolean' },
      description: 'If there should be no styling',
    },
    modPreWrap: {
      control: { type: 'boolean' },
      description: 'If the text should be pre-wrapped',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: 'Do quis ullamco qui. Fugiat minim cupidatat veniam magna. Ad est nisi minim anim qui officia culpa et anim anim aliquip est aliquip labore consectetur.',
    modNoStyle: false,
  },
};
