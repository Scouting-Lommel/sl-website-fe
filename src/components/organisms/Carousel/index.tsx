'use client';

import { Carousel as CarouselProps, PropType, UsePrevNextButtonsType } from './types';
import styles from './Carousel.css';
import CarouselItem from '@/components/molecules/CarouselItem';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';
import Icon from '@/components/atoms/Icon';
import { IconArrowLeft, IconArrowRight } from '@/assets/icons';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = CarouselProps & React.HTMLAttributes<HTMLElement>;

const Carousel = ({ carouselItems }: Props) => {
  const options: EmblaOptionsType = { align: 'start', loop: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className="carousel__container">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {carouselItems.data.map((item, i) => {
              return (
                <CarouselItem
                  logo={item.attributes.logo}
                  name={item.attributes.name}
                  slug={item.attributes.slug}
                  key={i}
                />
              );
            })}
          </div>
        </div>

        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="embla__button embla__button--prev" type="button" {...restProps}>
      <Icon title="arrowLeft" icon={IconArrowLeft} size="xl" />
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="embla__button embla__button--next" type="button" {...restProps}>
      <Icon title="arrowRight" icon={IconArrowRight} size="xl" />
    </button>
  );
};

export default Carousel;
