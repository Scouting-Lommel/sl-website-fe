import { ReactElement, ReactNode } from 'react';

export type Tab = {
  label: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export type Tabs = {
  children: ReactElement<Tab>[];
} & React.HTMLAttributes<HTMLElement>;
