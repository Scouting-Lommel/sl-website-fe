import { CarouselItem } from '@/components/molecules/CarouselItem/types';
import { PropsWithChildren } from 'react';

export type Carousel = {
  carouselItems: {
    data: {
      attributes: CarouselItem;
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
