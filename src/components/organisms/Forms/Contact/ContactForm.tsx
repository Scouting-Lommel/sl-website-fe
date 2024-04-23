import { useState } from 'react';
import { Recipients } from '@/lib/constants/recipients';
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
      id: 'emailRow',
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
          onChange: onRecipientChange,
        },
      ],
    },
    // {
    //   id: 'radioRow1',
    //   type: 'radioGroup',
    //   label: 'Radio buttons:',
    //   radioButtons: [
    //     {
    //       id: 'radio1',
    //       name: 'radiosRow1',
    //       label: 'Option 1',
    //       value: 'option1',
    //     },
    //     {
    //       id: 'radio2',
    //       name: 'radiosRow1',
    //       label: 'Option 2',
    //       value: 'option2',
    //     },
    //   ],
    // },
    // {
    //   id: 'radioRow2',
    //   type: 'radioGroup',
    //   label: 'Radio buttons',
    //   direction: 'row',
    //   value: 'option3',
    //   required: true,
    //   radioButtons: [
    //     {
    //       id: 'radio3',
    //       name: 'radiosRow2',
    //       label: 'Option 3',
    //       value: 'option3',
    //     },
    //     {
    //       id: 'radio4',
    //       name: 'radiosRow2',
    //       label: 'Option 4',
    //       value: 'option4',
    //     },
    //   ],
    // },
    {
      id: 'body',
      type: 'textarea',
      name: 'body',
      label: 'Bericht',
      required: true,
    },
    {
      id: 'captcha',
      type: 'captcha',
      required: true,
    },
    {
      id: 'terms-and-conditions',
      name: 'terms-and-conditions',
      type: 'checkbox',
      label: 'I accept the [terms and conditions](/privacy-policy)',
      required: true,
    },
  ];

  const [fields, setFields] = useState<FormField[]>(formFields);

  return (
    <FormBuilder
      formId="contact-form"
      fields={fields}
      initialValues={initialValues}
      submitButtonLabel="Bericht versturen"
    />
  );
};

export default ContactForm;
