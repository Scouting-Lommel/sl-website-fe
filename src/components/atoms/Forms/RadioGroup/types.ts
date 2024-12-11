import { Radio } from './Radio/types';

export type RadioGroup = {
  id: string;
  label: string;
  required?: boolean;
  autoComplete?: string;
  direction?: 'row' | 'column';
  radioButtons?: Radio[];
  register: any;
  error?: any;
} & React.InputHTMLAttributes<HTMLInputElement>;
