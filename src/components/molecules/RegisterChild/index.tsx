import { RegisterChild as RegisterChildProps } from './types';
import styles from './RegisterChild.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = RegisterChildProps & React.HTMLAttributes<HTMLElement>;

const RegisterChild = ({ index }: Props) => {
  return <></>;
};

export default RegisterChild;
