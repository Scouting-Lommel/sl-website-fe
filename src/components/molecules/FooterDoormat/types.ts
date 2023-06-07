type Link = {
  label: string;
  link: string;
};

type FooterNavigation = {
  title: string;
  navItems: Link[];
};

export type DoormatCol = {
  title: string;
  address?: string;
  links?: Link[];
};

export type FooterDoormat = {
  address: string;
  contactItems: Link[];
  footerNavigation: FooterNavigation[];
};
