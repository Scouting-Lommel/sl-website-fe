'use client';

import { useState } from 'react';
import Typography from '@/components/atoms/Typography';
import Icon from '@/components/atoms/Icon';
import SLImage from '@/components/atoms/Image';
import Button from '@/components/atoms/Button';
import { FaqItem as FAQProps } from './types';
import styles from './FaqItem.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FAQProps & React.HTMLAttributes<HTMLElement>;

const FAQItem = ({ question, answer, image, callToAction, finalQuestion }: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="faq-item__container">
      <div
        className={finalQuestion && !isOpen ? 'faq-item__title--no-border' : 'faq-item__title'}
        onClick={() => setOpen(!isOpen)}
      >
        <Typography>{question}</Typography>
        <Icon
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          aria-label="Chevron"
          size="lg"
          className="nav-item__dropdown-trigger__link__chevron"
        />
      </div>
      <div
        className={
          'faq-item__answer ' +
          (image?.data ? 'faq-item__answer--with-image ' : ' ') +
          (!isOpen ? 'faq-item__answer--hidden' : '')
        }
      >
        <div className="faq-item__answer__content">
          <Typography data={answer} />
          {callToAction && (
            <div className="faq-item__answer__content__button-container">
              <Button
                label={callToAction.label}
                href={callToAction.link}
                variant={callToAction.variant}
                className="faq-item__answer__content__button"
              />
            </div>
          )}
        </div>
        {image?.data && image.data.attributes && (
          <div className="faq-item__answer_image-container">
            <SLImage
              data={image.data.attributes}
              loadingStrategy={'lazy'}
              className="faq-item__answer__image"
              modMaximisable
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQItem;
