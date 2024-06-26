import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';

const findFieldByName = (formFields: any, name: string) => {
  for (let i = 0; i < formFields.length; i++) {
    const field = formFields[i];

    if (field.name === name) {
      return field;
    }

    if (field.type === 'row') {
      for (let j = 0; j < field.fieldChildren.length; j++) {
        if (field.fieldChildren[j].name === name) {
          return field.fieldChildren[j];
        }
      }
    }
  }
};

const findFieldLabel = (formFields: any, name: string) => {
  const field = findFieldByName(formFields, name);

  return field.label || name;
};

const isFormField = (formFields: any, name: string) => {
  const field = findFieldByName(formFields, name);

  return !['row', 'divider', 'text', 'captcha'].includes(field.type);
};

const generateFormDataWithLabel = (formData: any, formFields: FormField[]) => {
  return Object.keys(formData || {})
    .map((dataKey: any) => {
      if (!isFormField(formFields, dataKey)) return;
      return { label: findFieldLabel(formFields, dataKey), data: formData[dataKey] };
    })
    .filter((el) => el);
};

export default generateFormDataWithLabel;
