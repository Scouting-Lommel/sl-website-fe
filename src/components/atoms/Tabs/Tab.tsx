import type { JSX } from 'react';
import { Tab as TabProps } from './types';

const Tab = ({ children }: TabProps): JSX.Element => {
  return <div>{children}</div>;
};

export default Tab;
