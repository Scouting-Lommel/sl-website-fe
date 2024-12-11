export type Typography = {
  data?: string;
  modNoStyle?: boolean;
  modPreWrap?: boolean;
  tagName?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HTMLAttributes<HTMLElement>;
