import Typography from '@/components/atoms/Typography';
import Input from '@/components/atoms/Forms/Input';
import Select from '@/components/atoms/Forms/Select';
import TextArea from '@/components/atoms/Forms/TextArea';
import RadioGroup from '@/components/atoms/Forms/RadioGroup';
import Checkbox from '@/components/atoms/Forms/Checkbox';
import Captcha from '@/components/atoms/Forms/Captcha';
import { FormField as FormFieldProps } from './types';
import styles from './FormField.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FormFieldProps & React.HTMLAttributes<HTMLElement>;

const FormField = ({
  id,
  type,
  name,
  label,
  text,
  options,
  required,
  autoComplete,
  placeholder,
  value,
  disabled,
  customChangeBehaviour,
  rows,
  direction,
  defaultChecked,
  fieldChildren,
  register,
  errors,
  radioButtons,
}: Props) => {
  const errorMessage = errors && name ? errors[name]?.message : undefined;

  switch (type) {
    case 'text': {
      return (
        <div className="form-field">
          <Typography>{text}</Typography>
        </div>
      );
    }
    case 'divider': {
      return (
        <div className="form-field">
          <hr />
        </div>
      );
    }
    case 'row': {
      return (
        <div className="form-field">
          {fieldChildren?.map((child) => {
            return <FormField key={child.id} register={register} errors={errors} {...child} />;
          })}
        </div>
      );
    }
    case 'input': {
      return (
        <div className="form-field">
          {register && name && (
            <Input
              label={label!}
              type="input"
              id={id}
              {...register(name)}
              value={value}
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              autoComplete={autoComplete}
              error={errorMessage}
            />
          )}
        </div>
      );
    }
    case 'email': {
      return (
        <div className="form-field">
          {register && name && (
            <Input
              label={label!}
              type="email"
              id={id}
              {...register(name)}
              placeholder={placeholder}
              required={required}
              autoComplete={autoComplete}
              error={errorMessage}
            />
          )}
        </div>
      );
    }
    case 'tel': {
      return (
        <div className="form-field">
          {register && name && (
            <Input
              label={label!}
              type="tel"
              id={id}
              {...register(name)}
              placeholder={placeholder}
              required={required}
              autoComplete={autoComplete}
              error={errorMessage}
            />
          )}
        </div>
      );
    }
    case 'date': {
      return (
        <div className="form-field">
          {register && name && (
            <Input
              label={label!}
              type="date"
              id={id}
              {...register(name)}
              placeholder={placeholder}
              required={required}
              autoComplete={autoComplete}
              customChangeBehaviour={customChangeBehaviour}
              error={errorMessage}
            />
          )}
        </div>
      );
    }
    case 'textarea': {
      return (
        <div className="form-field">
          {register && name && (
            <TextArea
              label={label!}
              id={id}
              {...register(name)}
              rows={rows}
              placeholder={placeholder}
              required={required}
              autoComplete={autoComplete}
              error={errorMessage}
            />
          )}
        </div>
      );
    }
    case 'select': {
      return (
        <div className="form-field">
          {register && name && (
            <Select
              label={label!}
              id={id}
              {...register(name!)}
              options={options || []}
              required={required}
              autoComplete={autoComplete}
              customChangeBehaviour={customChangeBehaviour}
              error={errorMessage}
            />
          )}
        </div>
      );
    }
    case 'radioGroup': {
      return (
        <div className="form-field">
          <RadioGroup
            id={id}
            label={label!}
            name={name}
            value={value}
            direction={direction}
            radioButtons={radioButtons}
            required={required}
            register={register}
            error={errorMessage}
          />
        </div>
      );
    }
    case 'checkbox': {
      return (
        <div className="form-field">
          {register && name && (
            <Checkbox
              id={id}
              {...register(name!)}
              label={label!}
              required={required}
              autoComplete={autoComplete}
              checked={defaultChecked}
              customChangeBehaviour={customChangeBehaviour}
              error={errorMessage}
            />
          )}
        </div>
      );
    }
    case 'captcha': {
      return (
        <div className="form-field">
          <Captcha />
        </div>
      );
    }
    case 'hidden': {
      return (
        <>
          {register && name && (
            <input id={id} name={name} type="hidden">
              {value}
            </input>
          )}
        </>
      );
    }
  }
};

export default FormField;
