import type { Meta, StoryObj } from '@storybook/react';
import { IconGallery, IconItem } from '@storybook/blocks';
import { iconMap } from './IconMap';
import Icon from './';

const CustomIconGallery: React.FC = () => {
  return (
    <IconGallery>
      {Object.entries(iconMap).map(([name, _]) => {
        console.log(name);
        return (
          <IconItem name={name} key={name}>
            <Icon name={name as keyof typeof iconMap} size="xs" />
          </IconItem>
        );
      })}
    </IconGallery>
  );
};

const meta = {
  title: '3 Components / Atoms / Icons',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'The icon to display',
      control: { type: 'select' },
      options: Object.entries(iconMap).map(([name, _]) => name),
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the icon',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    name: 'arrow-down',
    size: 'sm',
  },
} satisfies Story;

const AllIconsTemplate = () => <CustomIconGallery />;
export const IconList = AllIconsTemplate.bind({});
