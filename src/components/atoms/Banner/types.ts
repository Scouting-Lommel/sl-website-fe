export type Banner = {
  variant: 'success' | 'danger' | 'error' | 'info' | 'neutral';
} & React.HTMLAttributes<HTMLElement>;
