import type { Button } from '@/components/atoms/Button/types';

export type DropdownNavItem = {
  name: string;
  description: string;
  slug: string;
};

export type DropdownItem = {
  label: string;
  page: string;
  link: string | null;
};

export type DropdownCta = {
  title: string;
  intro: string;
  ctaLabel: string;
  ctaLink: string;
};

export type Dropdown = {
  path: string;
  dropdownTitle: string;
  dropdownButton: Button;
  dropdownCta: DropdownCta;
  dropdownItems: DropdownItem[];
  groups: DropdownNavItem[];
  rentalLocations: DropdownNavItem[];
  toggleDropdown: Function;
};
