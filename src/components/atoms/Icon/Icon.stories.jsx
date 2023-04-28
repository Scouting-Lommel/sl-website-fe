import Icon from '.';
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconCalendar,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconClose,
  IconEdit,
  IconFacebook,
  IconInstagram,
  IconLock,
  IconMail,
  IconMenu,
  IconTikTok,
} from '@/assets/icons';

const IconStory = {
  title: '3 Components/Atoms/Icons',
  tags: ['autodocs'],
  component: Icon,
  argTypes: {
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
};

export default IconStory;

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Arrow Right',
  size: 'md',
  icon: IconArrowRight,
};

// TODO: Add icon list
