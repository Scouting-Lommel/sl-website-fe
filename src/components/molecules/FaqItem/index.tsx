'use client';

import { FaqItem as FAQProps } from './types';
import styles from './FaqItem.css';
import Typography from '@/components/atoms/Typography';
import Icon from '@/components/atoms/Icon';
import { IconChevronDown, IconChevronUp } from '@/assets/icons';
import { useState } from 'react';
import SLImage from '@/components/atoms/Image';
import Button from '@/components/atoms/Button';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FAQProps & React.HTMLAttributes<HTMLElement>;

const FAQItem = ({ question, answer, Image, callToAction, finalQuestion }: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="faqItemContainer">
      <div
        className={finalQuestion && !isOpen ? 'faqTitle--noBorder' : 'faqTitle'}
        onClick={() => setOpen(!isOpen)}
      >
        <Typography>{question}</Typography>
        <Icon
          size="sm"
          icon={isOpen ? IconChevronUp : IconChevronDown}
          className="nav-item__dropdown-trigger__link__chevron"
          title="Chevron"
        />
      </div>
      <div
        className={
          'faqAnswer ' +
          (Image ? 'faqAnswer--with-image ' : ' ') +
          (!isOpen ? 'faqAnswer__hidden' : '')
        }
      >
        {Image && (
          <div className="faqAnswer_image-container">
            <SLImage
              data={Image.data.attributes}
              loadingStrategy={'lazy'}
              className="faqAnswer__image"
            />
          </div>
        )}
        <div className="faqAnswer__content">
          <Typography>{answer}</Typography>
          {callToAction && (
            <Button
              label={callToAction.label}
              href={callToAction.link}
              variant={callToAction.variant}
              className="faqAnswer__content__button"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
