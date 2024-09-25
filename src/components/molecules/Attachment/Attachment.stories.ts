import type { Meta, StoryObj } from '@storybook/react';
import Attachment from '.';

const meta = {
  title: '3 Components/Molecules/Attachment',
  component: Attachment,
  tags: ['autodocs'],
} satisfies Meta<typeof Attachment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const File = {
  args: {
    variant: 'file',
    file: { id: '0', ext: '.png', url: 'randomurl.com', name: 'Image file attachment', size: 10 },
    modDeleteable: false,
  },
} satisfies Story;

export const Link = {
  args: {
    variant: 'link',
    link: {
      id: '1',
      label: 'scoutsengidsenvlaanderen.be',
      link: 'randomurl.com',
    },
    modDeleteable: false,
  },
} satisfies Story;
