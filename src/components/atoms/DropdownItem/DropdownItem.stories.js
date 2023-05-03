import DropdownItem from '.';

const DropdownItemStory = {
  title: '3 Components/Atoms/DropdownItem',
  tags: ['autodocs'],
  component: DropdownItem,
};

export default DropdownItemStory;

const containerStyle = { listStyleType: 'none', width: '240px', paddingLeft: 0 };

const Template = (args) => (
  <ul style={containerStyle}>
    <DropdownItem {...args} />
  </ul>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Akabe',
  description: 'Anders KAn BEst!',
  href: '/#',
};
