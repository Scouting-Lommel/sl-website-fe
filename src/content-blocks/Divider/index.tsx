import Divider from '@/components/atoms/Divider';
import { Divider as DividerProps } from './types';

type Props = DividerProps & React.HTMLAttributes<HTMLElement>;

const DividerBlock = ({}: Props) => {
  return <Divider />;
};

export default DividerBlock;
