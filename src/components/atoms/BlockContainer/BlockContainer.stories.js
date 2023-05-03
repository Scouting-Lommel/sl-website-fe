import BlockContainer from '.';

const BlockContainerStory = {
  title: '3 Components/Atoms/BlockContainer',
  tags: ['autodocs'],
  component: BlockContainer,
};

export default BlockContainerStory;

const containerStyle = { width: '99%' };

const Template = (args) => (
  <div style={containerStyle}>
    <BlockContainer {...args}>
      <p style={{ fontFamily: 'sans-serif', marginLeft: '24px', color: 'lightgrey' }}>
        Some content
      </p>
    </BlockContainer>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'dark',
  orientation: 'default',
  slug: 'storybook',
};
