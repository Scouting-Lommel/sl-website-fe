import generateFormSchema from '@/lib/helpers/generateFormSchema';
import { urlRegExValidation } from '@/lib/constants/regexValidation';
import FormBuilder from '@/components/organisms/Forms/FormBuilder';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import { UploadLinkForm as UploadLinkFormProps } from './types';

type Props = UploadLinkFormProps & React.HTMLAttributes<HTMLElement>;

const UploadLinkForm = ({ initialValues, submitForm, groupId }: Props) => {
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
          label: 'Naam',
          placeholder: 'Groepsadmin',
          required: true,
        },
        {
          type: 'url',
          pattern: urlRegExValidation,
          id: 'linkUrl',
          name: 'linkUrl',
          label: 'Link',
          placeholder: 'https://groepsadmin.scoutsengidsenvlaanderen.be',
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
      submitButtonLabel="Link uploaden"
    />
  );
};

export default UploadLinkForm;
