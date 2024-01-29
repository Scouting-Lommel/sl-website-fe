import type { Meta, StoryObj } from '@storybook/react';
import SkipToContent from '.';

const meta = {
  title: '3 Components/Atoms/SkipToContent',
  component: SkipToContent,
  tags: ['autodocs'],
} satisfies Meta<typeof SkipToContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
