import type { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

const meta = {
  title: '3 Components/Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    siteName: {
      control: { type: 'text' },
      description: 'The name of the site',
    },
    vatNumber: {
      control: { type: 'text' },
      description: 'The vat number',
    },
    groupNumber: {
      control: { type: 'text' },
      description: 'The number of the group',
    },
    address: {
      control: { type: 'text' },
      description: 'The address',
    },
    contactItems: {
      control: { type: 'object' },
      description: 'The contact items',
    },
    footerNavigation: {
      control: { type: 'object' },
      description: 'The navigation of the footer',
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    siteName: 'Scouting Sint-Pieter Lommel',
    vatNumber: 'BE 0410.966.531',
    groupNumber: 'L1205G',
    address: 'Nieuwe Kopen 4\n3920 Lommel\nBelgië',
    contactItems: [
      {
        label: 'info@scoutinglommel.be',
        link: 'mailto:info@scoutinglommel.be',
      },
      {
        label: 'Facebook Messenger',
        link: 'https://www.facebook.com/ScoutingLommel/',
      },
    ],
    footerNavigation: [
      {
        title: 'Sitemap',
        navItems: [
          {
            label: 'Onze takken',
            link: '/takken',
          },
          {
            label: 'Lokaalverhuur',
            link: '/verhuur',
          },
          {
            label: 'FAQ',
            link: '/algemene-informatie#veelgestelde-vragen',
          },
          {
            label: 'Contact',
            link: '/contact',
          },
        ],
      },
      {
        title: 'Links',
        navItems: [
          {
            label: 'Scouts & Gidsen Vlaanderen',
            link: 'https://www.scoutsengidsenvlaanderen.be/',
          },
          {
            label: 'Groepsadmin',
            link: 'https://groepsadmin.scoutsengidsenvlaanderen.be/',
          },
          {
            label: 'Hopper Winkel',
            link: 'https://www.hopper.be/',
          },
        ],
      },
      {
        title: 'Legaal',
        navItems: [
          {
            label: 'Privacyovereenkomst',
            link: '/privacy',
          },
          {
            label: 'Cookies',
            link: '/cookies',
          },
          {
            label: 'Drugs- en alcoholbeleid',
            link: '/drugs-alcohol-beleid',
          },
        ],
      },
    ],
  },
} satisfies Story;
