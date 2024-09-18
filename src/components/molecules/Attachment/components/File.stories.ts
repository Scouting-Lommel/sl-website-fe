import type { Meta, StoryObj } from '@storybook/react';
import File from './File';

const meta = {
  title: '3 Components/Molecules/Attachment/File',
  component: File,
  tags: ['autodocs'],
  argTypes: {
    ext: {
      control: { type: 'select' },
      options: ['.pdf', '.doc', '.docx', '.ppt', '.pptx', '.jpg', '.jpeg', '.png', '.gif', 'other'],
    },
    size: {
      control: { type: 'number' },
      description: 'The filesize in kB',
    },
  },
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    id: '0',
    ext: '.png',
    url: 'imageurl.com',
    name: 'Image file attachment',
    size: 10,
    modDeleteable: false,
  },
} satisfies Story;
