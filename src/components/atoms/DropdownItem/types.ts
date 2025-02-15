export type DropdownItem = {
  title: string;
  description?: string;
  href: string;
  modTargetBlank?: boolean;
} & React.HTMLAttributes<HTMLElement>;
