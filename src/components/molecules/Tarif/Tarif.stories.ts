import type { Meta, StoryObj } from '@storybook/react';
import Tarif from '.';

const meta: Meta<typeof Tarif> = {
  title: '3 Components/Molecules/Tarif',
  component: Tarif,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Erkende jeugdbeweging',
    example:
      '3 dagen * 15 euro = 45 euro. <br/>minimumprijs = 100 euro, dus **totale prijs = 100 euro**.',
    minimumPrice: 100,
    dayPrice: 15,
  },
};
