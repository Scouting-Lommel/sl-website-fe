import { ChangeEventHandler } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Radio } from '@/components/atoms/Forms/RadioGroup/Radio/types';
import { SelectOption } from '@/components/atoms/Forms/Select/types';

export type FormField = {
  id: string;
  type:
    | 'text'
    | 'row'
    | 'input'
    | 'tel'
    | 'email'
    | 'date'
    | 'textarea'
    | 'select'
    | 'radioGroup'
    | 'radio'
    | 'checkbox'
    | 'captcha'
    | 'hidden'
    | 'divider';
  name?: string;
  label?: string;
  text?: string;
  options?: SelectOption[];
  required?: boolean;
  autoComplete?: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  rows?: number;
  fieldChildren?: FormField[];
  radioButtons?: Radio[];
  direction?: 'row' | 'column';
  defaultChecked?: boolean;
  register?: UseFormRegister<any>;
  errors?: FieldErrors<any>;
  customChangeBehaviour?: ChangeEventHandler<HTMLElement>;
};
