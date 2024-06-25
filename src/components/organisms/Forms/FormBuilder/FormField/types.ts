import { ChangeEventHandler } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Radio } from '@/components/atoms/Forms/RadioGroup/Radio/types';
import { SelectOption } from '@/components/atoms/Forms/Select/types';

export type BaseField = {
  id: string;
  name: string;
  register?: UseFormRegister<any>;
  errors?: FieldErrors<any>;
};

export interface RowField extends BaseField {
  type: 'row';
  fieldChildren?: FormField[];
}

export interface TextField extends BaseField {
  type: 'text';
  className?: any;
  text: string;
}

export interface DividerField extends BaseField {
  type: 'divider';
}

export interface InputField extends BaseField {
  type: 'input' | 'email' | 'tel' | 'date';
  label: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  customChangeBehaviour?: ChangeEventHandler<HTMLElement>;
}

export interface TextAreaField extends BaseField {
  type: 'textarea';
  label: string;
  rows?: number;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
}

export interface SelectField extends BaseField {
  type: 'select';
  label: string;
  options?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  customChangeBehaviour?: ChangeEventHandler<HTMLElement>;
}

export interface RadioGroupField extends BaseField {
  type: 'radioGroup';
  label: string;
  value?: string;
  direction?: 'row' | 'column';
  radioButtons?: Radio[];
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
}

export interface CheckboxField extends BaseField {
  type: 'checkbox';
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  customChangeBehaviour?: ChangeEventHandler<HTMLElement>;
}

export interface CaptchaField extends BaseField {
  type: 'captcha';
}

export interface HiddenField extends BaseField {
  type: 'hidden';
  value?: string;
}

export type FormField =
  | RowField
  | TextField
  | DividerField
  | InputField
  | TextAreaField
  | SelectField
  | RadioGroupField
  | CheckboxField
  | CaptchaField
  | HiddenField;
