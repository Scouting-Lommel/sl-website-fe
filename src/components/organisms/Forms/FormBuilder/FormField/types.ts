import { Radio } from '@/components/atoms/Forms/RadioGroup/Radio/types';
import { SelectOption } from '@/components/atoms/Forms/Select/types';
import { ChangeEventHandler } from 'react';

export type FormField = {
  id: string;
  type:
    | 'text'
    | 'row'
    | 'input'
    | 'tel'
    | 'email'
    | 'textarea'
    | 'select'
    | 'radioGroup'
    | 'radio'
    | 'checkbox'
    | 'captcha'
    | 'hidden';
  name?: string;
  label?: string;
  text?: string;
  options?: SelectOption[];
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  fieldChildren?: FormField[];
  radioButtons?: Radio[];
  direction?: 'row' | 'column';
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};
