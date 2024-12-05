import type { Meta, StoryObj } from '@storybook/react';
import { formatDate } from '@/lib/helpers/dateTime';
import Activities from '.';

const meta: Meta<typeof Activities> = {
  title: '3 Components/Organisms/Activities',
  component: Activities,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialItems: 3,
    activities: [
      {
        attributes: {
          title: 'Stratego',
          startDate: formatDate(new Date()),
          endDate: formatDate(new Date()),
          startTime: '12:00',
          endTime: '14:30',
          description:
            'Vandaag spelen we het oerspel der scouts: Stratego! Wie kan zich kronen tot de beste generaal van Scouting Lommel? Kom het te weten op deze knotsgekke namiddag!',
        },
      },
      {
        attributes: {
          title: 'Schattentocht',
          startDate: formatDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 2 * 7)),
          endDate: formatDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 2 * 7)),
          startTime: '18:30',
          endTime: '21:00',
          description:
            'Vandaag gaan we met z’n allen op zoek naar een grote schat vol met goud die ergens in de Sahara verstopt ligt. De welpenleiding is al weken aan het zoeken naar deze schat maar vindt hem maar niet. Komen jullie ons vandaag hierbij helpen?',
        },
      },
    ],
  },
};
