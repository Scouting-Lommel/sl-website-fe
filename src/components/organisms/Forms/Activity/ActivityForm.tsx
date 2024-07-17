import generateFormSchema from '@/lib/helpers/generateFormSchema';
import FormBuilder from '@/components/organisms/Forms/FormBuilder';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import { ActivityForm as ActivityFormProps } from './types';

type Props = ActivityFormProps & React.HTMLAttributes<HTMLElement>;

const ActivityForm = ({ initialValues, submitForm }: Props) => {
  const formFields: FormField[] = [
    { type: 'input', id: 'title', name: 'title', label: 'Titel', required: true },
    {
      type: 'row',
      id: 'date-row',
      name: 'date-row',
      fieldChildren: [
        { type: 'datetime', id: 'start', name: 'start', label: 'Start activiteit', required: true },
        { type: 'datetime', id: 'end', name: 'end', label: 'Einde activiteit', required: true },
      ],
    },
    {
      type: 'textarea',
      id: 'description',
      name: 'description',
      label: 'Beschrijving',
      required: true,
    },
  ];

  const formSchema = generateFormSchema({ fields: formFields });

  const handleSubmit = (data: any) => {
    submitForm(data, formFields);
  };

  return (
    <FormBuilder
      formId="activity-form"
      fields={formFields}
      initialValues={initialValues}
      formSchema={formSchema}
      submitForm={handleSubmit}
      submitButtonLabel="Activiteit opslaan"
    />
  );
};

export default ActivityForm;
