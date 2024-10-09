import { useTranslations } from 'next-intl';
import generateFormSchema from '@/lib/helpers/generateFormSchema';
import FormBuilder from '@/components/organisms/Forms/FormBuilder';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import { ActivityForm as ActivityFormProps } from './types';

type Props = ActivityFormProps & React.HTMLAttributes<HTMLElement>;

const ActivityForm = ({ initialValues, activityId, submitForm, deleteActivity }: Props) => {
  const t = useTranslations('forms.activityForm');

  const formFields: FormField[] = [
    {
      type: 'hidden',
      id: 'activity-id',
      name: 'activity-id',
      value: activityId,
    },
    {
      type: 'input',
      id: 'title',
      name: 'title',
      label: t('fields.title.label'),
      required: true,
    },
    {
      type: 'row',
      id: 'date-row',
      name: 'date-row',
      fieldChildren: [
        {
          type: 'datetime',
          id: 'start',
          name: 'start',
          label: t('fields.start.label'),
          required: true,
        },
        {
          type: 'datetime',
          id: 'end',
          name: 'end',
          label: t('fields.end.label'),
          required: true,
        },
      ],
    },
    {
      type: 'textarea',
      id: 'description',
      name: 'description',
      label: t('fields.description.label'),
      rows: 6,
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
      submitButtonLabel={t('buttons.submit.label')}
      secondaryButton={
        activityId
          ? {
              label: t('buttons.secondary.label'),
              variant: 'danger',
              onClick: deleteActivity,
            }
          : undefined
      }
    />
  );
};

export default ActivityForm;
