export type Button = {
  [x: string]: any;
  label?: string;
  variant?: 'primary' | 'light' | 'link1' | 'danger';
  href?: string;
  modSmall?: boolean;
} & React.HTMLAttributes<HTMLElement>;
