import { useState } from 'react';
import generateFormSchema from '@/lib/helpers/generateFormSchema';
import { Recipients } from '@/lib/constants/enums/recipients';
import { Groups } from '@/lib/constants/enums/groups';
import FormBuilder from '@/components/organisms/Forms/FormBuilder';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import { ContactForm as ContactFormProps } from './types';

type Props = ContactFormProps & React.HTMLAttributes<HTMLElement>;

const ContactForm = ({ initialValues, submitForm }: Props) => {
  const onRecipientChange = (event: any) => {
    const rowIndex = fields.findIndex((field) => field.id === 'recipientRow');
    if (rowIndex > -1) {
      setFields((prevFields) => {
        const newFields = [...prevFields];
        const fieldChildren = newFields[rowIndex].fieldChildren;
        if (event.target.value === Recipients.GROUP) {
          const groupExists = fieldChildren?.some((field) => field.id === 'group');
          if (!groupExists) {
            fieldChildren?.push(groupSelect);
          }
        }
        if (event.target.value !== Recipients.GROUP) {
          const groupIndex = fieldChildren?.findIndex((field) => field.id === 'group');
          if (groupIndex !== undefined && groupIndex > -1) {
            fieldChildren?.splice(groupIndex, 1);
          }
        }
        return newFields;
      });
    }
  };

  const groupSelect: FormField = {
    id: 'group',
    type: 'select',
    name: 'group',
    label: 'Tak',
    options: Object.values(Groups).map((group) => ({ label: group, value: group })),
    required: false,
  };

  const formFields: FormField[] = [
    {
      id: 'nameRow',
      type: 'row',
      fieldChildren: [
        {
          id: 'firstName',
          type: 'input',
          name: 'firstName',
          label: 'Voornaam',
          required: true,
          autoComplete: 'given-name',
        },
        {
          id: 'lastName',
          type: 'input',
          name: 'lastName',
          label: 'Familienaam',
          required: true,
          autoComplete: 'family-name',
        },
      ],
    },
    {
      id: 'email',
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'email@example.com',
      required: true,
      autoComplete: 'email',
    },
    {
      id: 'recipientRow',
      type: 'row',
      fieldChildren: [
        {
          id: 'recipient',
          type: 'select',
          name: 'recipient',
          label: 'Ontvanger',
          options: Object.values(Recipients).map((recipient) => ({
            label: recipient,
            value: recipient,
          })),
          required: true,
          customChangeBehaviour: onRecipientChange,
        },
      ],
    },
    {
      id: 'body',
      type: 'textarea',
      name: 'body',
      label: 'Bericht',
      rows: 5,
      required: true,
    },
    {
      id: 'captcha',
      type: 'captcha',
      name: 'captcha',
    },
    {
      id: 'terms-and-conditions',
      name: 'terms-and-conditions',
      type: 'checkbox',
      label:
        'Ik heb kennis genomen met [de privacyverklaring van Scouting Lommel](/privacy-policy) en ga hiermee akkoord.',
      required: true,
    },
  ];

  const [fields, setFields] = useState<FormField[]>(formFields);
  const formSchema = generateFormSchema({ fields: formFields });

  const handleSubmit = (data: any) => {
    submitForm(data, fields);
  };

  return (
    <FormBuilder
      formId="contact-form"
      fields={fields}
      initialValues={initialValues}
      formSchema={formSchema}
      submitForm={handleSubmit}
      submitButtonLabel="Bericht versturen"
    />
  );
};

export default ContactForm;
