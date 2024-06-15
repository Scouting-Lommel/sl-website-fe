import { ChangeEventHandler } from 'react';

export type FormInput = {
  label: string;
  id: string;
  name: string;
  error?: any;
  customChangeBehaviour?: ChangeEventHandler<HTMLElement>;
};
