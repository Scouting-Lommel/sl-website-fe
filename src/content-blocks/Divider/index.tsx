import { Divider as DividerProps } from './types';

type Props = DividerProps & React.HTMLAttributes<HTMLElement>;

const Divider = ({}: Props) => {
  return <hr className="sl-layout" />;
};

export default Divider;
