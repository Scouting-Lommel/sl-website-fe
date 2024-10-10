import { useTranslations } from 'next-intl';
import generateFormSchema from '@/lib/helpers/generateFormSchema';
import FormBuilder from '@/components/organisms/Forms/FormBuilder';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import { EetfestijnForm as EetfestijnFormProps } from './types';

type Props = EetfestijnFormProps & React.HTMLAttributes<HTMLElement>;

const EetfestijnForm = ({ initialValues, submitForm }: Props) => {
  const t = useTranslations('forms');

  const formFields: FormField[] = [
    {
      type: 'input',
      id: 'name',
      name: 'name',
      label: t('eetfestijnForm.fields.name.label'),
      required: true,
    },
  ];

  const formSchema = generateFormSchema({ fields: formFields, t });

  const handleSubmit = (data: any) => {
    submitForm(data, formFields);
  };

  return (
    <FormBuilder
      formId="contact-form"
      fields={formFields}
      initialValues={initialValues}
      formSchema={formSchema}
      submitForm={handleSubmit}
      submitButtonLabel={t('eetfestijnForm.buttons.submit.label')}
    />
  );
};

export default EetfestijnForm;
