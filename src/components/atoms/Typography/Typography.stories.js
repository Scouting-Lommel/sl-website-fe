import Typography from '.';

const TypographyStory = {
  title: '3 Components/Atoms/Typograhy',
  tags: ['autodocs'],
  component: Typography,
};

export default TypographyStory;

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: 'Do quis ullamco qui. Fugiat minim cupidatat veniam magna. Ad est nisi minim anim qui officia culpa et anim anim aliquip est aliquip labore consectetur.',
  modNoStyle: false,
};
