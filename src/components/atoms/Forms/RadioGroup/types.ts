import { Radio } from './Radio/types';

export type RadioGroup = {
  id: string;
  label: string;
  required?: boolean;
  autoComplete?: string;
  value?: string;
  direction?: 'row' | 'column';
  radioButtons?: Radio[];
};
