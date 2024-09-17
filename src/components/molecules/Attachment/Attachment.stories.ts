// TODO: Write docs for deleteable + link variants

import type { Meta, StoryObj } from '@storybook/react';
import Attachment from '.';

const meta = {
  title: '3 Components/Molecules/Attachment',
  component: Attachment,
  tags: ['autodocs'],
} satisfies Meta<typeof Attachment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    variant: 'file',
    file: { id: '0', ext: '.undef', url: 'randomurl.com', name: 'Test name', size: 10 },
  },
} satisfies Story;

export const PNG = {
  args: {
    variant: 'file',
    file: { id: '1', ext: '.png', url: 'randomurl.com', name: 'Test name', size: 10 },
  },
} satisfies Story;

export const JPG = {
  args: {
    variant: 'file',
    file: { id: '2', ext: '.jpg', url: 'randomurl.com', name: 'Test name', size: 10 },
  },
} satisfies Story;

export const Word = {
  args: {
    variant: 'file',
    file: { id: '3', ext: '.docx', url: 'randomurl.com', name: 'Test name', size: 10 },
  },
} satisfies Story;

export const Powerpoint = {
  args: {
    variant: 'file',
    file: { id: '4', ext: '.pptx', url: 'randomurl.com', name: 'Test name', size: 10 },
  },
} satisfies Story;

export const PDF = {
  args: {
    variant: 'file',
    file: { id: '5', ext: '.pdf', url: 'randomurl.com', name: 'Test name', size: 10 },
  },
} satisfies Story;
