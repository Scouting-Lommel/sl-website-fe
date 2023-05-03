import SLLink from '.';

const LinkStory = {
  title: '3 Components/Atoms/Link',
  tags: ['autodocs'],
  component: SLLink,
};

export default LinkStory;

const Template = (args) => <SLLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "I'm a link!",
  href: '#/',
  variant: 'link1',
  modExternal: false,
};
