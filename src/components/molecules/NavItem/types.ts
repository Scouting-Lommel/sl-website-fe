import { Button } from '@/components/atoms/Button/types';
import { DropdownCta, DropdownItem, DropdownNavItem } from '@/components/molecules/Dropdown/types';
import { MouseEventHandler } from 'react';

export type NavItem = {
  itemKey: number;
  label: string;
  href: string;
  dropdownItems: DropdownItem[];
  dropdownCta?: DropdownCta | null;
  dropdownTitle?: string | null;
  dropdownButton?: Button | null;
  groups: DropdownNavItem[];
  rentalLocations: DropdownNavItem[];
  modButton?: boolean;
  modDropdown?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
};
