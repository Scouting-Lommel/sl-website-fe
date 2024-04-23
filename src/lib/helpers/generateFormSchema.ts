import { z } from 'zod';
import { ErrorMessage } from '@/lib/constants/enums/errorMessage';
import phoneRegExValidation from '@/lib/constants/phoneRegexValidation';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';

type Props = { fields: FormField[] };

const tuple = <T extends string>(arr: Array<T>): [T, ...T[]] => {
  return arr as [T, ...T[]];
};

const generateFormSchema = ({ fields }: Props) => {
  let schema: any = {};

  fields.forEach((field) => {
    if (field.type === 'row') {
      field.fieldChildren?.forEach((child) => {
        schema[child.name!] = getFieldSchema(child);
        if (!child.required) {
          schema[child.name!] = schema[child.name!].optional();
        }
      });
      return;
    }

    schema[field.name!] = getFieldSchema(field);

    if (!field.required) {
      schema[field.name!] = schema[field.name!].optional();
    }
  });

  return schema;
};

const getFieldSchema = (field: FormField) => {
  const stringOptions = { required_error: ErrorMessage.REQUIRED_ERROR };

  switch (field.type) {
    case 'input': {
      return z.string(stringOptions);
    }

    case 'tel': {
      return z.string(stringOptions).regex(phoneRegExValidation);
    }

    case 'email': {
      return z.string(stringOptions).email(ErrorMessage.EMAIL_INVALID);
    }

    case 'textarea': {
      return z.string(stringOptions);
    }

    case 'select': {
      const selectValues = field.options?.map((option) => option.value) || ['default'];
      return z.enum(tuple(selectValues), stringOptions);
    }

    case 'radioGroup': {
      const radioValues = field.radioButtons?.map((field) => field.value) || ['default'];
      return z.enum(tuple(radioValues), stringOptions);
    }

    case 'checkbox': {
      return z.boolean();
    }

    default: {
      return z.any();
    }
  }
};

export default generateFormSchema;
