import type { Meta, StoryObj } from '@storybook/react';
import FileSection from '.';

const meta = {
  title: '3 Components/Organisms/FileSection',
  component: FileSection,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title',
    },
    files: {
      control: { type: 'text' },
      description: 'The files',
    },
  },
} satisfies Meta<typeof FileSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Example title',
    files: {
      data: [
        { attributes: { ext: '.pdf', url: 'randomurl.com', name: 'Test name', size: 10 } },
        {
          attributes: { ext: '.docx', url: 'randomurl.com', name: 'Another test name', size: 450 },
        },
      ],
    },
  },
} satisfies Story;
