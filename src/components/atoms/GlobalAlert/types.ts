export type GlobalAlert = {
  label: string;
  variant: 'info' | 'warning' | 'error';
} & React.HTMLAttributes<HTMLElement>;
