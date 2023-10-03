import Typography from '@/components/atoms/Typography';
import { FormInput as FormInputProps } from './types';

type Props = FormInputProps & React.HTMLAttributes<HTMLElement>;

const Input = ({ label, ...props }: Props) => {
  return (
    <label>
      <Typography>{label}</Typography>
      <input {...props} />
    </label>
  );
};

export default Input;
