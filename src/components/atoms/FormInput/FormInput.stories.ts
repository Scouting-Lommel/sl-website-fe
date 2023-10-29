import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta = {
  title: '3 Components/Atoms/FormInput',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: 'Example label',
    type: 'text',
    id: 'customID',
    name: 'customName',
  },
} satisfies Story;

export const DateInput = {
  args: {
    label: 'Example label',
    type: 'date',
    id: 'customID',
    name: 'customName',
  },
} satisfies Story;

export const DatetimeInput = {
  args: {
    label: 'Example label',
    type: 'datetime-local',
    id: 'customID',
    name: 'customName',
  },
} satisfies Story;

export const PasswordInput = {
  args: {
    label: 'Example label',
    type: 'password',
    id: 'customID',
    name: 'customName',
  },
} satisfies Story;
