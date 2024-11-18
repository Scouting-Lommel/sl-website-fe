import { useTranslations } from 'next-intl';
import { generateFormSchema } from '@/lib/helpers/generateFormSchema';
import FormBuilder from '@/components/organisms/Forms/FormBuilder';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import { EetfestijnForm as EetfestijnFormProps } from './types';

type Props = EetfestijnFormProps & React.HTMLAttributes<HTMLElement>;

const EetfestijnForm = ({ initialValues, submitForm }: Props) => {
  const t = useTranslations('forms');

  const formFields: FormField[] = [
    {
      type: 'text',
      id: 'yourInformation',
      name: 'yourInformation',
      text: t('eetfestijnForm.fields.yourInformation.label'),
      className: 't-headline-3',
    },
    {
      type: 'row',
      id: 'informationRow',
      name: 'informationRow',
      fieldChildren: [
        {
          type: 'input',
          id: 'name',
          name: 'name',
          label: t('eetfestijnForm.fields.name.label'),
          required: true,
        },
        {
          type: 'email',
          id: 'email',
          name: 'email',
          label: t('eetfestijnForm.fields.email.label'),
          required: true,
        },
      ],
    },
    {
      type: 'divider',
      id: 'divider-0',
      name: 'divider-0',
    },
    {
      type: 'text',
      id: 'yourOrder',
      name: 'yourOrder',
      text: t('eetfestijnForm.fields.yourOrder.label'),
      className: 't-headline-3',
    },
    {
      type: 'number',
      id: 'pizza_margherita',
      name: 'pizza_margherita',
      label: t('eetfestijnForm.fields.pizzaMargherita.label'),
    },
    {
      type: 'number',
      id: 'pizza_hawai',
      name: 'pizza_hawai',
      label: t('eetfestijnForm.fields.pizzaHawai.label'),
    },
    {
      type: 'number',
      id: 'pizza_pollo',
      name: 'pizza_pollo',
      label: t('eetfestijnForm.fields.pizzaPollo.label'),
    },
    {
      type: 'divider',
      id: 'divider-2',
      name: 'divider-2',
    },
    {
      id: 'paymentMethod',
      name: 'paymentMethod',
      type: 'radioGroup',
      label: t('eetfestijnForm.fields.paymentMethod.label'),
      direction: 'row',
      required: true,
      radioButtons: [
        {
          id: 'onSite',
          name: 'onSite',
          label: t('eetfestijnForm.fields.paymentMethod.options.onSite'),
          value: 'onSite',
        },
        {
          id: 'bankTransfer',
          name: 'bankTransfer',
          label: t('eetfestijnForm.fields.paymentMethod.options.bankTransfer'),
          value: 'bankTransfer',
        },
      ],
    },
    {
      type: 'divider',
      id: 'divider-3',
      name: 'divider-3',
    },
    {
      id: 'captcha',
      type: 'captcha',
      name: 'captcha',
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
