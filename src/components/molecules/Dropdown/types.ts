import type { DropdownItem } from '@/components/atoms/DropdownItem/types';
import type { Button } from '@/components/atoms/Button/types';

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
  toggleDropdown: Function;
};
