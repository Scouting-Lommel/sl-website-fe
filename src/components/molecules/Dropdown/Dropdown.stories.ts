import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '.';

const meta = {
  title: '3 Components/Molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    path: '/verhuur',
    dropdownTitle: 'Verhuur',
    dropdownButton: {
      label: 'Ontdek alle locaties',
      href: '/verhuur',
      variant: 'primary',
    },
    dropdownCta: {
      title: 'Onze lokalen',
      intro:
        'Scouting Lommel is een grote scoutsgroep in het hartje van Lommel. Elke zaterdag staan we paraat aan onze lokalen in de Nieuwe Kopen, vlakbij de prachtige Lommelse Sahara midden in Bosland. ',
      ctaLink: '/verhuur',
      ctaLabel: 'Ontdek de lokalen',
    },
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
    groups: [],
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
    toggleDropdown: () => {},
  },
} satisfies Story;