import type { Meta, StoryObj } from '@storybook/react';
import TextImage from '.';

const meta = {
  title: '3 Components/Organisms/TextImage',
  component: TextImage,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'reversed'],
      description: 'The variant',
    },
    title: {
      control: { type: 'text' },
      description: 'The title',
    },
    content: {
      control: { type: 'text' },
      description: 'The content',
    },
    images: {
      control: { type: 'object' },
      description: 'The images',
    },
    ctaButton: {
      control: { type: 'object' },
      description: 'The cta buttons',
    },
  },
} satisfies Meta<typeof TextImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: 'Woordje van de groepsleiding',
    content:
      'Op 23 juli om 15u gaat onze bezoekdag van start! Hierbij willen we jullie graag uitnodigen voor een drankje te komen drinken en een lekkere hotdog te komen eten. Voor dit laatste zouden we wel willen vragen om onderstaand formulier in te vullen. Zo weten we ongeveer hoeveel hotdogs we moeten voorzien. Dit dient enkel ingevuld te worden voor de hotdogs die de ouders, grootouders,… eten, die van u zoon of dochter zit bij het kamp inbegrepen. De bezoekdag loopt op zijn einde tegen 19u00.',
    images: [
      {
        name: 'groepsfoto.png',
        width: 1949,
        height: 1240,
        url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445052/groepsfoto_75dfd0948c.png',
        alternativeText: 'groepsfoto.png',
        caption: 'groepsfoto.png',
        formats: {
          small: {
            width: 500,
            height: 318,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445049/small_groepsfoto_75dfd0948c.png',
          },
          medium: {
            width: 750,
            height: 477,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445050/medium_groepsfoto_75dfd0948c.png',
          },
          large: {
            width: 1000,
            height: 636,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445054/large_groepsfoto_75dfd0948c.png',
          },
        },
      },
    ],
    variant: 'default',
  },
} satisfies Story;

export const WithCallToAction = {
  args: {
    title: 'Woordje van de groepsleiding',
    content:
      'Op 23 juli om 15u gaat onze bezoekdag van start! Hierbij willen we jullie graag uitnodigen voor een drankje te komen drinken en een lekkere hotdog te komen eten. Voor dit laatste zouden we wel willen vragen om onderstaand formulier in te vullen. Zo weten we ongeveer hoeveel hotdogs we moeten voorzien. Dit dient enkel ingevuld te worden voor de hotdogs die de ouders, grootouders,… eten, die van u zoon of dochter zit bij het kamp inbegrepen. De bezoekdag loopt op zijn einde tegen 19u00.',
    images: [
      {
        name: 'groepsfoto.png',
        width: 1949,
        height: 1240,
        url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445052/groepsfoto_75dfd0948c.png',
        alternativeText: 'groepsfoto.png',
        caption: 'groepsfoto.png',
        formats: {
          small: {
            width: 500,
            height: 318,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445049/small_groepsfoto_75dfd0948c.png',
          },
          medium: {
            width: 750,
            height: 477,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445050/medium_groepsfoto_75dfd0948c.png',
          },
          large: {
            width: 1000,
            height: 636,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1673445054/large_groepsfoto_75dfd0948c.png',
          },
        },
      },
    ],
    variant: 'reversed',
    ctaButton: {
      label: 'Meer informatie',
      link: '/algemene-informatie',
      variant: 'primary',
    },
  },
} satisfies Story;

export const MultipleImages = {
  args: {
    title: 'Woordje van de groepsleiding',
    content:
      'Op 23 juli om 15u gaat onze bezoekdag van start! Hierbij willen we jullie graag uitnodigen voor een drankje te komen drinken en een lekkere hotdog te komen eten. Voor dit laatste zouden we wel willen vragen om onderstaand formulier in te vullen. Zo weten we ongeveer hoeveel hotdogs we moeten voorzien. Dit dient enkel ingevuld te worden voor de hotdogs die de ouders, grootouders,… eten, die van u zoon of dochter zit bij het kamp inbegrepen. De bezoekdag loopt op zijn einde tegen 19u00.',
    images: [
      {
        name: 'IMG_2453.jpg',
        width: 4032,
        height: 3024,
        url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/IMG_2453_9e4413dc77.jpg',
        formats: {
          small: {
            width: 500,
            height: 375,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/small_IMG_2453_9e4413dc77.jpg',
          },
          large: {
            width: 1000,
            height: 750,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/large_IMG_2453_9e4413dc77.jpg',
          },
          medium: {
            width: 750,
            height: 563,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/medium_IMG_2453_9e4413dc77.jpg',
          },
        },
      },
      {
        name: '701b9def-caf1-40ca-bf21-ed32fb6f30de.jpg',
        width: 2048,
        height: 1536,
        url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/701b9def_caf1_40ca_bf21_ed32fb6f30de_246b33e3ec.jpg',
        formats: {
          large: {
            width: 1000,
            height: 750,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/large_701b9def_caf1_40ca_bf21_ed32fb6f30de_246b33e3ec.jpg',
          },
          small: {
            width: 500,
            height: 375,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/small_701b9def_caf1_40ca_bf21_ed32fb6f30de_246b33e3ec.jpg',
          },
          medium: {
            width: 750,
            height: 563,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/medium_701b9def_caf1_40ca_bf21_ed32fb6f30de_246b33e3ec.jpg',
          },
        },
      },
      {
        name: 'IMG_2454.jpg',
        width: 4032,
        height: 3024,
        url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/IMG_2454_79d5bbc4ec.jpg',
        formats: {
          medium: {
            width: 750,
            height: 563,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/medium_IMG_2454_79d5bbc4ec.jpg',
          },
          large: {
            width: 1000,
            height: 750,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/large_IMG_2454_79d5bbc4ec.jpg',
          },
          small: {
            width: 500,
            height: 375,
            url: 'https://res.cloudinary.com/scoutinglommel/image/upload/v1690105463/small_IMG_2454_79d5bbc4ec.jpg',
          },
        },
      },
    ],
    variant: 'default',
    ctaButton: {
      label: 'Meer over akabe',
      link: '/takken/akabe',
      variant: 'primary',
    },
  },
} satisfies Story;
