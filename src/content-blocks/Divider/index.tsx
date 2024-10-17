import Divider from '@/components/atoms/Divider';
import { Divider as DividerProps } from './types';

type Props = DividerProps & React.HTMLAttributes<HTMLElement>;

const DividerBlock = ({ variant }: Props) => {
  return <Divider variant={variant} />;
};

export default DividerBlock;
