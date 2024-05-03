import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/atoms/Button';
import FormField from './FormField';
import { FormBuilder as FormBuilderProps } from './types';
import styles from './Form.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormBuilderProps & React.HTMLAttributes<HTMLElement>;

const FormBuilder = ({
  formId,
  fields,
  initialValues,
  formSchema,
  submitForm,
  submitButtonLabel,
}: Props) => {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = new FormData(event.target as HTMLFormElement);
    const token = body.get('cf-turnstile-response');

    const captchaRequest = await fetch('/api/verify-captcha', {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
    const captchaResponse = await captchaRequest.json();

    if (!captchaResponse.success) {
      // Set form state
      return;
    }

    submitForm(body);
  };

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  return (
    <form id={formId} className="form" onSubmit={onSubmit}>
      {/* Form Fields */}
      {fields?.map((field) => (
        <FormField key={field.id} register={register} errors={errors} {...field} />
      ))}

      {/* Submit button */}
      <Button label={submitButtonLabel} type="submit" />

      {/* Required fields footnote */}
      <div>* Verplicht veld</div>
    </form>
  );
};

export default FormBuilder;
