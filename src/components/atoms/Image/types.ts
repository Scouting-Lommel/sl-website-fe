export type CloudinaryImage = {
  [x: string]: any;
  name: string;
  width: number;
  height: number;
  url: string;
  alternativeText?: string;
  caption?: string;
  ext?: string;
  formats: {
    small: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    large: { url: string; width: number; height: number };
  };
  blurhash?: string;
};

export type Image = {
  data: CloudinaryImage;
  loadingStrategy: 'lazy' | 'eager';
  modMaximisable?: boolean;
};
