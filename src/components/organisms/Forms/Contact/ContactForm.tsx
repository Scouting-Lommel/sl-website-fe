import { useEffect, useState } from 'react';
import generateFormSchema from '@/lib/helpers/generateFormSchema';
import { Recipients } from '@/lib/constants/enums/recipients';
import { Groups } from '@/lib/constants/enums/groups';
import FormBuilder from '@/components/organisms/Forms/FormBuilder';
import {
  FormField,
  BaseField,
  RowField,
} from '@/components/organisms/Forms/FormBuilder/FormField/types';
import { ContactForm as ContactFormProps } from './types';

type Props = ContactFormProps & React.HTMLAttributes<HTMLElement>;

const ContactForm = ({ initialValues, submitForm }: Props) => {
  const isRowField = (field: FormField): field is RowField & BaseField => field.type === 'row';
  const isRecipientRow = (field: FormField): boolean => field.id === 'recipientRow';
  const isGroupField = (field: FormField): boolean => field.id === 'group';

  const onRecipientChange = (event: any) => {
    updateFields(event.target.value);
  };

  const updateFields = (recipient: Recipients) => {
    const rowIndex = fields.findIndex(isRecipientRow);

    if (rowIndex > -1) {
      setFields((prevFields) => {
        const newFields = [...prevFields];
        const field = newFields[rowIndex];

        if (isRowField(field)) {
          const fieldChildren = field.fieldChildren;

          if (fieldChildren) {
            if (recipient === Recipients.GROUP) {
              const groupExists = fieldChildren.some(isGroupField);
              if (!groupExists) {
                fieldChildren.push(groupSelect);
              }
            }
            if (recipient !== Recipients.GROUP) {
              const groupIndex = fieldChildren.findIndex(isGroupField);
              if (groupIndex !== -1) {
                fieldChildren.splice(groupIndex, 1);
              }
            }
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
      type: 'row',
      id: 'nameRow',
      name: 'nameRow',
      fieldChildren: [
        {
          type: 'input',
          id: 'firstName',
          name: 'firstName',
          label: 'Voornaam',
          required: true,
          autoComplete: 'given-name',
        },
        {
          type: 'input',
          id: 'lastName',
          name: 'lastName',
          label: 'Familienaam',
          required: true,
          autoComplete: 'family-name',
        },
      ],
    },
    {
      type: 'email',
      id: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'email@example.com',
      required: true,
      autoComplete: 'email',
    },
    {
      type: 'row',
      id: 'recipientRow',
      name: 'recipientRow',
      fieldChildren: [
        {
          type: 'select',
          id: 'recipient',
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
      type: 'textarea',
      id: 'body',
      name: 'body',
      label: 'Bericht',
      rows: 8,
      required: true,
    },
    {
      type: 'captcha',
      id: 'captcha',
      name: 'captcha',
    },
    {
      type: 'checkbox',
      id: 'terms-and-conditions',
      name: 'terms-and-conditions',
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

  useEffect(() => {
    updateFields(initialValues.recipient);
  }); // Execute only on first render

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
