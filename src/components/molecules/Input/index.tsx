import { Input as InputProps } from './types';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import Typography from '@/components/atoms/Typography';

type InputList = {
  [key: string]: ComponentType<any>;
};

const inputList: InputList = {
  text: dynamic(() => import('./text')),
  radio: dynamic(() => import('./radio')),
  checkbox: dynamic(() => import('./checkbox')),
  submit: dynamic(() => import('./submit')),
};

type Props = InputProps & React.HTMLAttributes<HTMLElement>;

const Input = ({ title, type, placeholder, required, options, redirect }: Props) => {
  if (!(type in inputList)) {
    console.warn(`Missing component for: '${type}', you should create one first.`);
    return null;
  }

  const InputType = inputList[type];

  return (
    <div className="input">
      <Typography>
        <label htmlFor={title}>{title}</label>
        <br />
        <InputType
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
