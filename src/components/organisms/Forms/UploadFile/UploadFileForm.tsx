import generateFormSchema from '@/lib/helpers/generateFormSchema';
import FormBuilder from '@/components/organisms/Forms/FormBuilder';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import { UploadFileForm as UploadFileFormProps } from './types';

type Props = UploadFileFormProps & React.HTMLAttributes<HTMLElement>;

const UploadFileForm = ({ initialValues, submitForm, groupId }: Props) => {
  const formFields: FormField[] = [
    {
      type: 'hidden',
      id: 'group-id',
      name: 'group-id',
      value: groupId,
    },
    { type: 'file', id: 'file', name: 'file', label: 'Kies een bestand', required: true },
  ];

  const formSchema = generateFormSchema({ fields: formFields });

  const handleSubmit = (data: any) => {
    submitForm(data, formFields);
    console.log(data);
  };

  return (
    <FormBuilder
      formId="upload-file-form"
      fields={formFields}
      initialValues={initialValues}
      formSchema={formSchema}
      submitForm={handleSubmit}
      submitButtonLabel="Bestand uploaden"
    />
  );
};

export default UploadFileForm;
