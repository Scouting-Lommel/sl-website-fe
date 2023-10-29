import type { Meta, StoryObj } from '@storybook/react';
import File from '.';

const meta = {
  title: '3 Components/Molecules/File',
  component: File,
  tags: ['autodocs'],
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: { ext: '.undef', url: 'randomurl.com', name: 'Test name', size: 10 },
} satisfies Story;

export const PNG = {
  args: { ext: '.png', url: 'randomurl.com', name: 'Test name', size: 10 },
} satisfies Story;

export const JPG = {
  args: { ext: '.jpg', url: 'randomurl.com', name: 'Test name', size: 10 },
} satisfies Story;

export const Word = {
  args: { ext: '.docx', url: 'randomurl.com', name: 'Test name', size: 10 },
} satisfies Story;

export const Powerpoint = {
  args: { ext: '.pptx', url: 'randomurl.com', name: 'Test name', size: 10 },
} satisfies Story;

export const PDF = {
  args: { ext: '.pdf', url: 'randomurl.com', name: 'Test name', size: 10 },
} satisfies Story;
