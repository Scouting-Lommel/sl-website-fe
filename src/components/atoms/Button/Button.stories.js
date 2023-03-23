import Button from '.';

const ButtonStory = {
  title: '3 Components/Atoms/Button',
  tags: ['autodocs'],
  component: Button,
};

export default ButtonStory;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "I'm a button!",
  variant: 'primary',
  type: 'button',
  modLink: false,
  modSmall: false,
  href: '/#',
};
