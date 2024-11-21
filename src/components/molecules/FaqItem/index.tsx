'use client';

import cx from 'classnames';
import { useState } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import SLImage from '@/components/atoms/Image';
import Typography from '@/components/atoms/Typography';
import { FaqItem as FAQProps } from './types';
import styles from './FaqItem.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const FAQItem = ({ question, answer, image, callToAction }: FAQProps): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const faqClasses = cx('faq-item', {
    'faq-item--open': isOpen,
  });

  return (
    <div className={faqClasses}>
      <button className="faq-item__title" onClick={() => setOpen(!isOpen)}>
        <Typography>{question}</Typography>
        <Icon
          name="chevron-down"
          aria-label="Chevron"
          size="lg"
          className="faq-item__title__chevron"
        />
      </button>
      <div
        className={cx('faq-item__answer', {
          'faq-item__answer--with-image': image?.data,
          'faq-item__answer--hidden': !isOpen,
        })}
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
              loadingStrategy="lazy"
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
