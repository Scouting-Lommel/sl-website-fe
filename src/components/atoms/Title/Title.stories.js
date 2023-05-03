import Title from '.';

const TitleStory = {
  title: '3 Components/Atoms/Title',
  tags: ['autodocs'],
  component: Title,
};

export default TitleStory;

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "I'm a title!",
  variant: 'h1',
  style: 'h1-alt',
  modLight: false,
  modAccent: false,
  modPrimary: false,
  modMarkup: false,
};
