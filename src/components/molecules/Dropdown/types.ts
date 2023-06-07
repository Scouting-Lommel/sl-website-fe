import type { Button } from '@/components/atoms/Button/types';

export type NavItem = {
  name: string;
  description: string;
  slug: string;
};

type DropdownItem = {
  label: string;
  page: string;
  link: string | null;
};

type DropdownCta = {
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
  groups: NavItem[];
  rentalLocations: NavItem[];
  toggleDropdown: Function;
};
