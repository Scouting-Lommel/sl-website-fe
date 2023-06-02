import type { Meta, StoryObj } from '@storybook/react';
import Icon from '.';
import {
  // IconArrowDown,
  // IconArrowLeft,
  IconArrowRight,
  // IconArrowUp,
  // IconCalendar,
  // IconCheck,
  // IconChevronDown,
  // IconChevronLeft,
  // IconChevronRight,
  // IconChevronUp,
  // IconClose,
  // IconEdit,
  // IconFacebook,
  // IconInstagram,
  // IconLock,
  // IconMail,
  // IconMenu,
  // IconTikTok,
} from '@/assets/icons';

const meta = {
  title: '3 Components/Atoms/Icons',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' } },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Arrow Right',
    size: 'md',
    icon: IconArrowRight,
  },
} satisfies Story;

// TODO: Add icon list
