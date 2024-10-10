import { useTranslations } from 'next-intl';
import generateFormSchema from '@/lib/helpers/generateFormSchema';
import FormBuilder from '@/components/organisms/Forms/FormBuilder';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import { UploadFileForm as UploadFileFormProps } from './types';

type Props = UploadFileFormProps & React.HTMLAttributes<HTMLElement>;

const UploadFileForm = ({ initialValues, submitForm, groupId }: Props) => {
  const t = useTranslations('forms');

  const formFields: FormField[] = [
    {
      type: 'hidden',
      id: 'group-id',
      name: 'group-id',
      value: groupId,
    },
    {
      type: 'file',
      id: 'file',
      name: 'file',
      label: t('uploadFileForm.fields.file'),
      required: true,
    },
  ];

  const formSchema = generateFormSchema({ fields: formFields, t });

  const handleSubmit = (data: any) => {
    submitForm(data, formFields);
  };

  return (
    <FormBuilder
      formId="upload-file-form"
      fields={formFields}
      initialValues={initialValues}
      formSchema={formSchema}
      submitForm={handleSubmit}
      submitButtonLabel={t('uploadFileForm.buttons.submit.label')}
    />
  );
};

export default UploadFileForm;
