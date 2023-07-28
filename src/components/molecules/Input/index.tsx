import { Input as InputProps } from './types';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import Typography from '@/components/atoms/Typography';
import styles from './input.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type InputList = {
  [key: string]: ComponentType<any>;
};

const inputList: InputList = {
  button: dynamic(() => import('./button')),
  checkbox: dynamic(() => import('./checkbox')),
  color: dynamic(() => import('./color')),
  date: dynamic(() => import('./date')),
  datetime_local: dynamic(() => import('./datetime-local')),
  email: dynamic(() => import('./email')),
  file: dynamic(() => import('./file')),
  month: dynamic(() => import('./month')),
  number: dynamic(() => import('./number')),
  password: dynamic(() => import('./password')),
  radio: dynamic(() => import('./radio')),
  range: dynamic(() => import('./range')),
  submit: dynamic(() => import('./submit')),
  tel: dynamic(() => import('./tel')),
  text: dynamic(() => import('./text')),
  time: dynamic(() => import('./time')),
  wysiwyg: dynamic(() => import('./wysiwyg')),
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const Input = ({ title, type, placeholder, required, options, redirect }: Props) => {
  if (!(type in inputList)) {
    console.warn(`Missing component for: '${type}', you should create one first.`);
    return null;
  }

  const InputSpecification = inputList[type];

  return (
    <div className={type === 'submit' ? 'input--type-submit' : 'input'}>
      <Typography>
        <InputSpecification
          type={type}
          title={title}
          placeholder={placeholder}
          required={required}
          options={options}
          redirect={redirect}
        />
      </Typography>
    </div>
  );
};

export default Input;
