import * as Yup from 'yup';
import { ErrorMessage } from '@/lib/constants/enums/errorMessage';
import { phoneRegExValidation } from '@/lib/constants/regexValidation';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';

type Props = { fields: FormField[] };

const generateFormSchema = ({ fields }: Props) => {
  let schemaObj: { [key: string]: Yup.AnySchema } = {};

  fields.forEach((field) => {
    if (field.type === 'row') {
      field.fieldChildren?.forEach((child) => {
        let schema = getFieldSchema(child);
        schemaObj[child.name!] = child.required
          ? schema.required(ErrorMessage.REQUIRED_ERROR)
          : schema.optional();
      });
      return;
    }

    let schema = getFieldSchema(field);
    schemaObj[field.name!] = field.required
      ? schema.required(ErrorMessage.REQUIRED_ERROR)
      : schema.optional();
  });

  return Yup.object().shape(schemaObj);
};

const getFieldSchema = (field: FormField): Yup.AnySchema => {
  switch (field.type) {
    case 'input':
    case 'textarea':
    case 'date': {
      return Yup.string();
    }

    case 'tel': {
      return Yup.string().matches(phoneRegExValidation, ErrorMessage.PHONE_INVALID);
    }

    case 'email': {
      return Yup.string().email(ErrorMessage.EMAIL_INVALID);
    }

    case 'select': {
      const selectValues = field.options?.map((option) => option.value) || ['default'];
      return Yup.mixed().oneOf(selectValues, ErrorMessage.INVALID_OPTION);
    }

    case 'radioGroup': {
      const radioValues = field.radioButtons?.map((field) => field.value) || ['default'];
      return Yup.string().oneOf(radioValues);
    }

    case 'checkbox': {
      return field.required
        ? Yup.boolean().oneOf([true], ErrorMessage.REQUIRED_ERROR)
        : Yup.boolean();
    }

    default: {
      return Yup.mixed();
    }
  }
};

export default generateFormSchema;
