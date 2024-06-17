import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';

const findFieldLabelByName = (formFields: any, name: string) => {
  for (let i = 0; i < formFields.length; i++) {
    const field = formFields[i];

    if (field.name === name) {
      return field.label;
    }

    if (field.type === 'row') {
      for (let j = 0; j < field.fieldChildren.length; j++) {
        if (field.fieldChildren[j].name === name) {
          return field.fieldChildren[j].label;
        }
      }
    }
  }

  return name;
};

const generateFormDataWithLabel = (formData: any, formFields: FormField[]) => {
  return Object.keys(formData || {}).map((dataKey: any) => {
    return { label: findFieldLabelByName(formFields, dataKey), data: formData[dataKey] };
  });
};

export default generateFormDataWithLabel;
