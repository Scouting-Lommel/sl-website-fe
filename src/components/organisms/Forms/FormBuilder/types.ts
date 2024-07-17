import { Button } from '@/components/atoms/Button/types';
import { FormField } from './FormField/types';

export type FormBuilder = {
  formId: string;
  fields: FormField[];
  initialValues: any;
  formSchema: any;
  submitForm: any;
  submitButtonLabel: string;
  secondaryButton?: Button;
};
