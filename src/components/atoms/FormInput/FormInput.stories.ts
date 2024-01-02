import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta = {
  title: '3 Components/Atoms/FormInput',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'The label on the input',
      control: { type: 'text' },
    },
    type: {
      description: 'The type of the input',
      control: { type: 'text' },
    },
    id: {
      description: 'The id of the input',
      control: { type: 'text' },
    },
    name: {
      description: 'The name of the input',
      control: { type: 'text' },
    },
    required: {
      description: 'Is the input required',
      control: { type: 'select' },
    },
  },
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
