import type { Meta, StoryObj } from '@storybook/react';
import { iconMap } from './IconMap';
import Icon from './';

const CustomIconGallery: React.FC = () => {
  return (
    <div className="sb-section">
      {Object.entries(iconMap).map(([name, _]) => {
        return (
          <div className="sb-list__item" key={name}>
            <div className="sb-list__item__cell">
              <div className="sb-icon-swatch">
                <Icon name={name as keyof typeof iconMap} size="lg" />
              </div>
            </div>
            <div className="sb-code sb-code--styled">{name}</div>
          </div>
        );
      })}
    </div>
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
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The size of the icon',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    name: 'arrow-down',
    size: 'lg',
  },
} satisfies Story;

const AllIconsTemplate = () => <CustomIconGallery />;
export const IconList = AllIconsTemplate.bind({});
