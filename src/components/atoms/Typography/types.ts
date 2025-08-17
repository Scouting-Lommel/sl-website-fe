import { BlocksContent } from '@strapi/blocks-react-renderer';

export type Typography = {
  data?: string | BlocksContent;
  modNoStyle?: boolean;
  modPreWrap?: boolean;
  tagName?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'default' | 'muted';
  numberOfLines?: number;
  wrapperClassName?: string;
} & React.HTMLAttributes<HTMLElement>;

export type MarkdownRendererProps = {
  data: string;
  className?: string;
};

export type StructuredTextRendererProps = {
  data: BlocksContent;
};
