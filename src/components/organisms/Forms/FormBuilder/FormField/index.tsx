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
  customChangeBehaviour,
  rows,
  direction,
  defaultChecked,
  fieldChildren,
  register,
  radioButtons,
}: Props) => {
  switch (type) {
    case 'text': {
      return (
        <div className="form-field">
          <Typography>{text}</Typography>
        </div>
      );
    }
    case 'row': {
      return (
        <div className="form-field">
          {fieldChildren?.map((child) => {
            return <FormField key={child.id} register={register} {...child} />;
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
              placeholder={placeholder}
              required={required}
              autoComplete={autoComplete}
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
            value={value}
            direction={direction}
            radioButtons={radioButtons}
            required={required}
            register={register}
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
              name={name}
              label={label!}
              required={required}
              autoComplete={autoComplete}
              checked={defaultChecked}
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
