import { FormField } from './FormField/types';

export type FormBuilder = {
  formId: string;
  fields: FormField[];
  initialValues: any;
  formSchema: any;
  submitForm: any;
  submitButtonLabel: string;
  setStatus: any;
};
