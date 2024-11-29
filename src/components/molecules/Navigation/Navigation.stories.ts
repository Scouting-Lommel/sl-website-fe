import type { Meta, StoryObj } from '@storybook/react';
import Navigation from '.';

const meta: Meta<typeof Navigation> = {
  title: '3 Components/Molecules/Navigation',
  component: Navigation,
  argTypes: {
    navItems: {
      control: { type: 'object' },
      description: 'The navigation items',
    },
    groups: {
      control: { type: 'object' },
      description: 'The groups',
    },
    rentalLocations: {
      control: { type: 'object' },
      description: 'The renatal locations',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navItems: [
      {
        label: 'Home',
        link: null,
        page: 'home',
        dropdownItems: [],
        dropdownCta: null,
        dropdownTitle: null,
      },
      {
        label: 'Takken',
        link: null,
        page: 'takken',
        dropdownItems: [
          {
            label: 'Kapoenen',
            page: 'kapoenen',
            link: null,
          },
          {
            label: 'Welpen',
            page: 'welpen',
            link: null,
          },
          {
            label: 'Akabe',
            page: 'akabe',
            link: null,
          },
          {
            label: 'Jonggivers',
            page: 'jonggivers',
            link: null,
          },
          {
            label: 'Givers',
            page: 'givers',
            link: null,
          },
          {
            label: 'Jin',
            page: 'jin',
            link: null,
          },
        ],
        dropdownCta: {
          title: 'Anders KAn BEst!',
          intro:
            'Nieuw bij de scouts? Dan mag je 2 keer naar de activiteit komen om te proberen. Beslis je daarna om te blijven? Dan moet je inschrijven. Zo is iedereen in orde met verzekeringen e.d.',
          ctaLink: '/takken/akabe',
          ctaLabel: 'Ontdek de akabe',
        },
        dropdownTitle: 'Onze takken',
        dropdownButton: {
          label: 'Ontdek alle takken',
          link: '/takken',
          variant: 'primary',
        },
      },
      {
        label: 'Verhuur',
        link: null,
        page: 'verhuur',
        dropdownItems: [
          {
            label: 'Lokaal en speelweide',
            page: 'lokaal_en_speelweide',
            link: null,
          },
          {
            label: 'Tentenweide',
            page: 'tentenweide',
            link: null,
          },
        ],
        dropdownCta: {
          title: 'Onze lokalen',
          intro:
            'Scouting Lommel is een grote scoutsgroep in het hartje van Lommel. Elke zaterdag staan we paraat aan onze lokalen in de Nieuwe Kopen, vlakbij de prachtige Lommelse Sahara midden in Bosland. ',
          ctaLink: '/verhuur',
          ctaLabel: 'Ontdek de lokalen',
        },
        dropdownTitle: 'Onze locaties',
        dropdownButton: {
          label: 'Ontdek alle locaties',
          link: '/verhuur',
          variant: 'primary',
        },
      },
      {
        label: 'Info',
        link: null,
        page: 'algemene_informatie',
        dropdownItems: [],
        dropdownCta: null,
        dropdownTitle: null,
      },
      {
        label: 'Inschrijven',
        link: null,
        page: 'inschrijven',
        dropdownItems: [],
        dropdownCta: null,
        dropdownTitle: null,
      },
      {
        label: 'Contact',
        link: null,
        page: 'contact',
        dropdownItems: [],
        dropdownCta: null,
        dropdownTitle: null,
      },
    ],
    groups: [
      {
        name: 'Kapoenen',
        description: '1ste tot 2de leerjaar',
        slug: 'kapoenen',
      },
      {
        name: 'Welpen',
        description: '3de, 4de en 5de middelbaar',
        slug: 'welpen',
      },
      {
        name: 'Akabe',
        description: 'Anders KAn BEst!',
        slug: 'akabe',
      },
      {
        name: 'Jonggivers',
        description: '6de leerjaar tot 2de middelbaar',
        slug: 'jonggivers',
      },
      {
        name: 'Givers',
        description: '3de, 4de en 5de middelbaar',
        slug: 'givers',
      },
      {
        name: 'Jin',
        description: '6de middelbaar',
        slug: 'jin',
      },
    ],
    rentalLocations: [
      {
        name: 'Lokaal en speelweide',
        description: 'Scoutsheem met ruime speelweide',
        slug: 'lokaal-en-speelweide',
      },
      {
        name: 'Tentenweide',
        description: 'Grote tentenweide met voorzieningen',
        slug: 'tentenweide',
      },
    ],
  },
};
