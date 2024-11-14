export type CloudinaryImage = {
  [x: string]: any;
  name: string;
  width: number;
  height: number;
  url: string;
  hash: string;
  alternativeText?: string;
  caption?: string;
  ext?: string;
  blurhash?: string;
};

export type Image = {
  data: CloudinaryImage;
  loadingStrategy?: 'lazy' | 'eager';
  modMaximisable?: boolean;
};
