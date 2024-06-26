import { useState } from 'react';
import generateFormSchema from '@/lib/helpers/generateFormSchema';
import getCurrentWorkingYear from '@/lib/helpers/getCurrentWorkingYear';
import { Groups } from '@/lib/constants/enums/groups';
import FormBuilder from '@/components/organisms/Forms/FormBuilder';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
import { RegisterForm as RegisterFormProps } from './types';

type Props = RegisterFormProps & React.HTMLAttributes<HTMLElement>;

const RegisterForm = ({ initialValues, submitForm }: Props) => {
  let currentBirthday: string = '';
  let isAkabe: boolean = false;

  const getGroupByBirthday = (birthday: string) => {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(birthday).getFullYear();
    const age = currentYear - birthYear;

    if (age >= 6 && age <= 7) return Groups.KAPOENEN;
    if (age >= 8 && age <= 10) return Groups.WELPEN;
    if (age >= 11 && age <= 13) return Groups.JONGGIVERS;
    if (age >= 14 && age <= 16) return Groups.GIVERS;
    if (age === 17) return Groups.JIN;
    if (age >= 18) return 'Leiding';
    return '/';
  };

  const onBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    currentBirthday = event.target.value;

    const rowIndex = fields.findIndex((field) => field.id === 'birthdayRow');
    if (rowIndex === -1 || !fields[rowIndex].fieldChildren) return;
    const fieldChildIndex_vis = fields[rowIndex].fieldChildren?.findIndex(
      (field) => field.id === 'memberGroup_vis',
    );
    const fieldChildIndex = fields[rowIndex].fieldChildren?.findIndex(
      (field) => field.id === 'memberGroup',
    );
    if (
      fieldChildIndex === -1 ||
      typeof fieldChildIndex === 'undefined' ||
      typeof fieldChildIndex_vis === 'undefined'
    ) {
      return;
    }

    if (!isAkabe) {
      setFields((prevFields) => {
        const newFields = [...prevFields];
        const fieldChildren = newFields[rowIndex].fieldChildren;

        if (typeof fieldChildren === 'undefined') return newFields;

        fieldChildren[fieldChildIndex_vis].value = getGroupByBirthday(currentBirthday);
        fieldChildren[fieldChildIndex].value = getGroupByBirthday(currentBirthday);

        return newFields;
      });
    }
  };

  const onIsAkabeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isAkabe = event.target.checked;

    const rowIndex = fields.findIndex((field) => field.id === 'birthdayRow');
    if (rowIndex === -1 || !fields[rowIndex].fieldChildren) return;
    const fieldChildIndex_vis = fields[rowIndex].fieldChildren?.findIndex(
      (field) => field.id === 'memberGroup_vis',
    );
    const fieldChildIndex = fields[rowIndex].fieldChildren?.findIndex(
      (field) => field.id === 'memberGroup',
    );
    if (
      fieldChildIndex === -1 ||
      typeof fieldChildIndex === 'undefined' ||
      typeof fieldChildIndex_vis === 'undefined'
    ) {
      return;
    }

    setFields((prevFields) => {
      const newFields = [...prevFields];
      const fieldChildren = newFields[rowIndex].fieldChildren;

      if (typeof fieldChildren === 'undefined') return newFields;

      if (event.target.checked) {
        fieldChildren[fieldChildIndex_vis].value = Groups.AKABE;
        fieldChildren[fieldChildIndex].value = Groups.AKABE;
      }

      if (!event.target.checked) {
        fieldChildren[fieldChildIndex_vis].value = getGroupByBirthday(currentBirthday);
        fieldChildren[fieldChildIndex].value = getGroupByBirthday(currentBirthday);
      }

      return newFields;
    });
  };

  const formFields: FormField[] = [
    {
      type: 'text',
      id: 'registerIntro',
      name: 'registerIntro',
      text: `Schrijf jezelf of je zoon/dochter in voor scoutsjaar **${getCurrentWorkingYear()}** via onderstaand formulier.`,
    },
    {
      type: 'divider',
      id: 'divider-0',
      name: 'divider-0',
    },
    {
      type: 'text',
      id: 'memberToRegister',
      name: 'memberToRegister',
      text: 'In te schrijven lid: ',
      className: 't-headline-3',
    },
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
      type: 'row',
      id: 'birthdayRow',
      name: 'birthdayRow',
      fieldChildren: [
        {
          id: 'birthday',
          type: 'date',
          name: 'birthday',
          label: 'Geboortedatum',
          required: true,
          customChangeBehaviour: onBirthdayChange,
        },
        {
          id: 'memberGroup_vis',
          type: 'input',
          name: 'memberGroup',
          label: 'Tak',
          value: '',
          disabled: true,
        },
        {
          id: 'memberGroup',
          type: 'hidden',
          name: 'memberGroup',
          value: '',
        },
      ],
    },
    {
      id: 'isAkabe',
      name: 'isAkabe',
      type: 'checkbox',
      label: 'Schrijf me in bij de [akabe](/takken/akabe)',
      customChangeBehaviour: onIsAkabeChange,
    },
    {
      id: 'genderRow',
      name: 'gender',
      type: 'radioGroup',
      label: 'Geslacht',
      direction: 'row',
      required: true,
      radioButtons: [
        {
          id: 'm',
          name: 'm',
          label: 'Man',
          value: 'm',
        },
        {
          id: 'v',
          name: 'v',
          label: 'Vrouw',
          value: 'v',
        },
        {
          id: 'x',
          name: 'x',
          label: 'Andere',
          value: 'x',
        },
      ],
    },
    {
      type: 'divider',
      id: 'divider-1',
      name: 'divider-1',
    },
    {
      type: 'text',
      id: 'generalInformation',
      name: 'generalInformation',
      text: 'Overige informatie: ',
      className: 't-headline-3',
    },
    {
      type: 'row',
      id: 'contactRow',
      name: 'contactRow',
      fieldChildren: [
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
          type: 'tel',
          id: 'telephoneNumber',
          name: 'telephoneNumber',
          label: 'Telefoonnummer',
          required: true,
          autoComplete: 'tel',
        },
      ],
    },
    {
      type: 'input',
      id: 'address',
      name: 'address',
      label: 'Adres',
      required: true,
      autoComplete: 'street-address',
    },
    {
      type: 'row',
      id: 'addressRow',
      name: 'addressRow',
      fieldChildren: [
        {
          type: 'input',
          id: 'postCode',
          name: 'postCode',
          label: 'Postcode',
          required: true,
          autoComplete: 'postal-code',
        },
        {
          type: 'input',
          id: 'locality',
          name: 'locality',
          label: 'Gemeente',
          required: true,
          autoComplete: 'address-level-2',
        },
      ],
    },
    {
      type: 'divider',
      id: 'divider-2',
      name: 'divider-2',
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

export default RegisterForm;
