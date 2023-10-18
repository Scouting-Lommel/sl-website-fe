import { Dispatch, SetStateAction } from 'react';

export type RegisterChild = {
  index: number;
  first?: boolean;
  prevlink?: Dispatch<SetStateAction<boolean>>;
};
