import * as Yup from 'yup';
import { useTranslations } from 'next-intl';
import { phoneRegExValidation, urlRegExValidation } from '@/lib/constants/regexValidation';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';

type Props = { fields: FormField[]; t: ReturnType<typeof useTranslations<'forms'>> };

const SUPPORTED_FILE_FORMATS = [
  'application/pdf',
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/gif',
];
const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB

const generateFormSchema = ({ fields, t }: Props) => {
  let schemaObj: { [key: string]: Yup.AnySchema } = {};

  fields.forEach((field) => {
    if (field.type === 'row') {
      field.fieldChildren?.forEach((child) => {
        let schema = getFieldSchema(child, t);
        schemaObj[child.name!] = child.required
          ? schema.required(t('errorMessage.required'))
          : schema.optional();
      });
      return;
    }

    let schema = getFieldSchema(field, t);
    schemaObj[field.name!] = field.required
      ? schema.required(t('errorMessage.required'))
      : schema.optional();
  });

  return Yup.object().shape(schemaObj);
};

const getFieldSchema = (
  field: FormField,
  t: ReturnType<typeof useTranslations<'forms'>>,
): Yup.AnySchema => {
  switch (field.type) {
    case 'input':
    case 'textarea':
    case 'date': {
      return Yup.string();
    }

    case 'tel': {
      return Yup.string().matches(phoneRegExValidation, t('errorMessage.phone'));
    }

    case 'email': {
      return Yup.string().email(t('errorMessage.email'));
    }

    case 'url': {
      return Yup.string().matches(urlRegExValidation, t('errorMessage.url'));
    }

    case 'select': {
      const selectValues = field.options?.map((option) => option.value) || ['default'];
      return Yup.mixed().oneOf(selectValues, t('errorMessage.invalidOption'));
    }

    case 'radioGroup': {
      const radioValues = field.radioButtons?.map((field) => field.value) || ['default'];
      return Yup.string().oneOf(radioValues);
    }

    case 'checkbox': {
      return field.required
        ? Yup.boolean().oneOf([true], t('errorMessage.required'))
        : Yup.boolean();
    }

    case 'file': {
      const fileTest = Yup.mixed()
        .test('fileSize', t('errorMessage.fileSize'), (value: any) => {
          if (value.length < 1) return true;
          return value[0].size <= MAX_FILE_SIZE;
        })
        .test('fileFormat', t('errorMessage.fileFormat'), (value: any) => {
          if (value.length < 1) return true;
          return SUPPORTED_FILE_FORMATS.includes(value[0].type);
        });
      return field.required
        ? fileTest.test('containsFiles', t('errorMessage.required'), (value: any) => {
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
