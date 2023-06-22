import { CloudinaryImage } from '@/components/atoms/Image/types';
import { DropdownNavItem } from '@/components/molecules/Dropdown/types';
import { NavItem } from '@/components/molecules/Navigation/types';

export type Header = {
  logo: { data: { attributes: CloudinaryImage } };
  mainNavigation: NavItem[];
  groups: DropdownNavItem[];
  rentalLocations: DropdownNavItem[];
};
