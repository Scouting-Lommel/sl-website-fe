export type FormFile = {
  label: string;
  id: string;
  name: string;
  error?: any;
} & React.InputHTMLAttributes<HTMLElement>;
