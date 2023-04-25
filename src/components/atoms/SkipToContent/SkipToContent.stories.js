import SkipToContent from '.';

const SkipToContentStory = {
  title: '3 Components/Atoms/SkipToContent',
  tags: ['autodocs'],
  component: SkipToContent,
};

export default SkipToContentStory;

const Template = (args) => <SkipToContent {...args} />;

export const Default = Template.bind({});
Default.args = {};
