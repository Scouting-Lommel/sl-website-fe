import { ReactElement, ReactNode } from 'react';

export type Tab = {
  label: string;
  children: ReactNode;
};

export type Tabs = {
  children: ReactElement<Tab>[];
};
