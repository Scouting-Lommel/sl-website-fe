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

export type Link = {
  id: string;
  label: string;
  link: string;
  modDeleteable?: boolean;
  deleteCallback?: any;
};

type BaseBlock = {
  modDeleteable?: boolean;
  deleteCallback?: any;
};

interface FileBlock extends BaseBlock {
  variant: 'file';
  file: File;
}

interface LinkBlock extends BaseBlock {
  variant: 'link';
  link: Link;
}

export type Extensions = { [k: string]: ComponentType<{}> };

export type Attachment = FileBlock | LinkBlock;
