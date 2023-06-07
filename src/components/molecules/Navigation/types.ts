import { Button } from '@/components/atoms/Button/types';
import { DropdownNavItem, DropdownItem, DropdownCta } from '@/components/molecules/Dropdown/types';

type NavItem = {
  label: string;
  link: string | null;
  page: string;
  dropdownItems: DropdownItem[];
  dropdownCta: DropdownCta | null;
  dropdownTitle: string | null;
  dropdownButton: Button | null;
};

export type Navigation = {
  navItems: NavItem[];
  groups: DropdownNavItem[];
  rentalLocations: DropdownNavItem[];
};
