import Typography from '@/components/atoms/Typography';
import Input from '@/components/atoms/Forms/Input';
import Select from '@/components/atoms/Forms/Select';
import TextArea from '@/components/atoms/Forms/TextArea';
import RadioGroup from '@/components/atoms/Forms/RadioGroup';
import Checkbox from '@/components/atoms/Forms/Checkbox';
import { FormField as FormFieldProps } from './types';
import styles from './FormField.css';
import Captcha from '@/components/atoms/Forms/Captcha';

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
  onChange,
  rows,
  direction,
  defaultChecked,
  fieldChildren,
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
            return <FormField key={child.id} {...child} />;
          })}
        </div>
      );
    }
    case 'input': {
      return (
        <div className="form-field">
          <Input
            label={label || ''}
            type="input"
            id={id}
            name={name || ''}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
          />
        </div>
      );
    }
    case 'email': {
      return (
        <div className="form-field">
          <Input
            label={label || ''}
            type="email"
            id={id}
            name={name || ''}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
          />
        </div>
      );
    }
    case 'tel': {
      return (
        <div className="form-field">
          <Input
            label={label || ''}
            type="tel"
            id={id}
            name={name || ''}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
          />
        </div>
      );
    }
    case 'textarea': {
      return (
        <div className="form-field">
          <TextArea
            label={label || ''}
            id={id}
            name={name || ''}
            rows={rows}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
          />
        </div>
      );
    }
    case 'select': {
      return (
        <div className="form-field">
          <Select
            label={label || ''}
            id={id}
            name={name || ''}
            options={options || []}
            required={required}
            autoComplete={autoComplete}
            onChange={onChange}
          />
        </div>
      );
    }
    case 'radioGroup': {
      return (
        <div className="form-field">
          <RadioGroup
            id={id}
            label={label || ''}
            value={value}
            direction={direction}
            radioButtons={radioButtons}
            required={required}
          />
        </div>
      );
    }
    case 'checkbox': {
      return (
        <div className="form-field">
          <Checkbox
            id={id}
            name={name}
            label={label || ''}
            required={required}
            autoComplete={autoComplete}
            checked={defaultChecked}
          />
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
        <input id={id} name={name} type="hidden">
          {value}
        </input>
      );
    }
  }
};

export default FormField;
