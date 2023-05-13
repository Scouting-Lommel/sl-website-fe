export type Title = {
  title: string;
  variant: 'h1' | 'h2' | 'h3';
  titleStyle?: 'h1' | 'h1-alt' | 'h2' | 'h3';
  tagName?: string;
  modLight: boolean;
  modPrimary: boolean;
  modAccent: boolean;
  modMarkup: boolean;
};
