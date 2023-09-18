import { CloudinaryImage } from '@/components/atoms/Image/types';
import { PropsWithChildren } from 'react';

export type Carousel = {
  groups: {
    data: {
      attributes: {
        name: string;
        slug: string;
        logo: { data: { attributes: CloudinaryImage } };
      };
    }[];
  };
};

export type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export type PropType = PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;
