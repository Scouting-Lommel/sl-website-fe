import { Divider as DividerProps } from './types';

type Props = DividerProps & React.HTMLAttributes<HTMLElement>;

const Divider = ({ variant = 'default' }: Props) => {
  return <hr className="sl-layout" />;
};

export default Divider;
