import Button from '@/components/atoms/Button';
import FormField from './FormField';
import { FormBuilder as FormBuilderProps } from './types';
import styles from './Form.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormBuilderProps & React.HTMLAttributes<HTMLElement>;

const FormBuilder = ({ formId, fields, submitButtonLabel }: Props) => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const body = new FormData(event.target);
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

    // Continue handling submit
  };

  return (
    <form id={formId} className="form" onSubmit={handleSubmit}>
      {/* Form Fields */}
      {fields?.map((field) => (
        <FormField key={field.id} {...field} />
      ))}

      {/* Required fields footnote */}
      <div>* Verplicht veld</div>

      {/* Submit button */}
      <Button label={submitButtonLabel} type="submit" />
    </form>
  );
};

export default FormBuilder;
