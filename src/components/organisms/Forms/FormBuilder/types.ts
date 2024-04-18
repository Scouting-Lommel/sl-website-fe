import { FormField } from './FormField/types';

export type FormBuilder = {
  formId: string;
  fields: FormField[];
  initialValues: any;
  submitButtonLabel: string;
};
