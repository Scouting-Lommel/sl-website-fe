import { useTranslations } from 'next-intl';
import generateFormSchema from '@/lib/helpers/generateFormSchema';
import { urlRegExValidation } from '@/lib/constants/regexValidation';
import FormBuilder from '@/components/organisms/Forms/FormBuilder';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import { UploadLinkForm as UploadLinkFormProps } from './types';

type Props = UploadLinkFormProps & React.HTMLAttributes<HTMLElement>;

const UploadLinkForm = ({ initialValues, submitForm, groupId }: Props) => {
  const t = useTranslations('forms.uploadLinkForm');

  const formFields: FormField[] = [
    {
      type: 'hidden',
      id: 'groupId',
      name: 'groupId',
      value: groupId,
    },
    {
      type: 'row',
      id: 'linkRow',
      name: 'linkRow',
      fieldChildren: [
        {
          type: 'input',
          id: 'linkLabel',
          name: 'linkLabel',
          label: t('fields.linkLabel.label'),
          placeholder: t('fields.linkLabel.placeholder'),
          required: true,
        },
        {
          type: 'url',
          pattern: urlRegExValidation,
          id: 'linkUrl',
          name: 'linkUrl',
          label: t('fields.linkUrl.label'),
          placeholder: t('fields.linkUrl.placeholder'),
          required: true,
        },
      ],
    },
  ];

  const formSchema = generateFormSchema({ fields: formFields });

  const handleSubmit = (data: any) => {
    submitForm(data, formFields);
  };

  return (
    <FormBuilder
      formId="upload-link-form"
      fields={formFields}
      initialValues={initialValues}
      formSchema={formSchema}
      submitForm={handleSubmit}
      submitButtonLabel={t('buttons.submit.label')}
    />
  );
};

export default UploadLinkForm;
