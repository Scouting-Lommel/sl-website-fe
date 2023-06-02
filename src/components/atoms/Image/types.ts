export type CloudinaryImage = {
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
};

export type Image = {
  data: CloudinaryImage;
  loadingStrategy: 'lazy' | 'eager';
};
