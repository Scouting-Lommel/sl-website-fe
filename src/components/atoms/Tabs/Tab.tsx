import { Tab as TabProps } from './types';

type Props = TabProps & React.HTMLAttributes<HTMLElement>;

const Tab = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Tab;
