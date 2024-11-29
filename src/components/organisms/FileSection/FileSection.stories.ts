import type { Meta, StoryObj } from '@storybook/react';
import FileSection from '.';

const meta: Meta<typeof FileSection> = {
  title: '3 Components/Organisms/FileSection',
  component: FileSection,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Example title',
    files: {
      data: [
        {
          attributes: {
            id: '0',
            ext: '.png',
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445052/groepsfoto_75dfd0948c.png',
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
        link: 'https://scoutsengidsenvlaanderen.be',
      },
    ],
  },
};
