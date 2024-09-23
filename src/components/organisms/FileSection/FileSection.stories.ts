import type { Meta, StoryObj } from '@storybook/react';
import FileSection from '.';

const meta = {
  title: '3 Components/Organisms/FileSection',
  component: FileSection,
  tags: ['autodocs'],
} satisfies Meta<typeof FileSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Example title',
    files: {
      data: [
        {
          attributes: {
            id: '0',
            ext: '.png',
            url: 'randomurl.com',
            name: 'Image file attachment',
            size: 10,
          },
        },
        {
          attributes: {
            id: '1',
            ext: '.docx',
            url: 'randomurl.com',
            name: 'Document file attachment',
            size: 450,
          },
        },
      ],
    },
    links: [
      {
        id: '1',
        label: 'scoutsengidsenvlaanderen.be',
        link: 'randomurl.com',
      },
    ],
  },
} satisfies Story;
