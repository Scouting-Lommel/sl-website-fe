import type { Meta, StoryObj } from '@storybook/react';
import Captcha from '.';

const meta: Meta<typeof Captcha> = {
  title: '3 Components/Atoms/Forms/Captcha',
  component: Captcha,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
