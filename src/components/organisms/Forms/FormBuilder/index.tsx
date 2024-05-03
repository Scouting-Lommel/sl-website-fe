import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/atoms/Button';
import FormField from './FormField';
import { FormField as FormFieldType } from './FormField/types';
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
  const onSubmit = async (_: any, event: any) => {
    const body = new FormData(event.target as HTMLFormElement);
    const token = body.get('cf-turnstile-response');
    const formValues = getFormValues(body);

    const captchaRequest = await fetch('/api/verify-captcha', {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
    const captchaResponse = await captchaRequest.json();

    if (!captchaResponse.success) {
      // Set form state
      return;
    }

    submitForm(formValues);
  };

  const getFormValues = (formData: any) => {
    const formValues: Record<string, any> = {};

    const mapFields = (formFields: FormFieldType[]) => {
      formFields.forEach((field: FormFieldType) => {
        if (field.type === 'captcha') return;

        if (field.type === 'row' && field.fieldChildren) {
          mapFields(field.fieldChildren);
          return;
        }

        if (field.name) {
          formValues[field.name] = formData.get(field.name);
        }
      });
    };

    mapFields(fields);

    return formValues;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  return (
    <form noValidate id={formId} className="form" onSubmit={handleSubmit(onSubmit)}>
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
