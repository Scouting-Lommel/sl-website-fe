import { ChangeEventHandler } from 'react';

export type Checkbox = {
  id: string;
  label: string;
  error?: any;
  customChangeBehaviour?: ChangeEventHandler<HTMLElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;
