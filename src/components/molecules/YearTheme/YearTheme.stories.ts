import type { Meta, StoryObj } from '@storybook/react';
import YearTheme from '.';

const meta = {
  title: '3 Components/Molecules/YearTheme',
  component: YearTheme,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title of the yeartheme',
    },
    description: {
      control: { type: 'text' },
      description: 'The description of the yeartheme',
    },
    image: {
      control: { type: 'object' },
      description: 'The image on the yeartheme',
    },
  },
} satisfies Meta<typeof YearTheme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Das goesting!',
    description:
      'Met het jaarthema DAS Goesting kiezen we ervoor om stil te staan bij de drijvende kracht achter scouting en achter ons eigen engagement. Wat motiveert ons? Waarom ga ik naar de scouts? Waarom blijf ik naar de scouts gaan? Door hierover na te denken en dit bespreekbaar te maken geven we een boost aan onze motivatie. ',
    image: {
      name: 'DAS Goesting JPG website.jpg',
      width: 709,
      height: 1342,
      url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1676274527/DAS_Goesting_JPG_website_fde3a9c757.jpg',
      formats: {
        small: {
          width: 264,
          height: 500,
          url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1676274527/small_DAS_Goesting_JPG_website_fde3a9c757.jpg',
        },
        medium: {
          width: 396,
          height: 750,
          url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1676274527/medium_DAS_Goesting_JPG_website_fde3a9c757.jpg',
        },
        large: {
          width: 528,
          height: 1000,
          url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1676274527/large_DAS_Goesting_JPG_website_fde3a9c757.jpg',
        },
      },
    },
  },
} satisfies Story;
