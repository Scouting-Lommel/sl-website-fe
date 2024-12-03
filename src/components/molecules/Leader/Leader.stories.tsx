import type { Meta, StoryObj } from '@storybook/react';
import { Default as imageStory } from '@/components/atoms/Image/Image.stories';
import Leader from '.';

const meta: Meta<typeof Leader> = {
  title: '3 Components/Molecules/Leader',
  component: Leader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstName: 'Example',
    lastName: 'Name',
    image: {
      data: {
        attributes: imageStory.args!.data!,
      },
    },
  },
  decorators: [
    (Story: () => JSX.Element): JSX.Element => (
      <div style={{ width: '11.5rem' }}>
        <Story />
      </div>
    ),
  ],
};
