import { IconNames } from '@/components/atoms/Icon/IconMap';

export type File = {
  id: string;
  ext: string;
  url: string;
  name: string;
  size: number;
  modDeleteable?: boolean;
  deleteCallback?: any;
} & React.HTMLAttributes<HTMLElement>;

export type Link = {
  id: string;
  label: string;
  link: string;
  groupId?: string;
  allLinks?: Link[];
  modDeleteable?: boolean;
  deleteCallback?: any;
} & React.HTMLAttributes<HTMLElement>;

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
  groupId?: string;
  allLinks?: Link[];
}

export type Extensions = {
  [k: string]: IconNames;
};

export type Attachment = (FileBlock | LinkBlock) & React.HTMLAttributes<HTMLElement>;
