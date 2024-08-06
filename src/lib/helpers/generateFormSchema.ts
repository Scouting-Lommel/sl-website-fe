import * as Yup from 'yup';
import { ErrorMessage } from '@/lib/constants/enums/errorMessage';
import { phoneRegExValidation } from '@/lib/constants/regexValidation';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';

type Props = { fields: FormField[] };

const SUPPORTED_FILE_FORMATS = [
  'application/pdf',
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/gif',
];
const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB

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

    case 'file': {
      const fileTest = Yup.mixed()
        .test('fileSize', ErrorMessage.MAX_FILE_SIZE_ERROR, (value: any) => {
          if (value.length < 1) return true;
          return value[0].size <= MAX_FILE_SIZE;
        })
        .test('fileFormat', ErrorMessage.UNSUPPORTED_FILE_FORMAT_ERROR, (value: any) => {
          if (value.length < 1) return true;
          return SUPPORTED_FILE_FORMATS.includes(value[0].type);
        });
      return field.required
        ? fileTest.test('containsFiles', ErrorMessage.REQUIRED_ERROR, (value: any) => {
            return value.length > 0;
          })
        : fileTest;
    }

    default: {
      return Yup.mixed();
    }
  }
};

export default generateFormSchema;
