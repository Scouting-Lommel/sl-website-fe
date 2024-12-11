export type Radio = {
  id: string;
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
