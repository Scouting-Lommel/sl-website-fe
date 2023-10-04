import { ComponentType } from 'react';

export type File = {
  ext: string;
  url: string;
  name: string;
  size: number;
};

export type extensions = { [k: string]: ComponentType<{}> };
