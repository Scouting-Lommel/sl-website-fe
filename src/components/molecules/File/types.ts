import { ComponentType } from 'react';

export type File = {
  id: string;
  ext: string;
  url: string;
  name: string;
  size: number;
  modDeleteable?: boolean;
  deleteCallback?: any;
};

export type extensions = { [k: string]: ComponentType<{}> };
