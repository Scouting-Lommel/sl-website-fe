'use client';

import { ActivitySection as ActivityProps } from './types';
// import styles from './Activities.css';

// export const links = () => {
//   return [{ rel: 'stylesheet', href: styles }];
// };

type Props = ActivityProps & React.HTMLAttributes<HTMLElement>;

const Activities = ({ activities, initialItems }: Props) => {
  return <div>{initialItems}</div>;
};

export default Activities;
