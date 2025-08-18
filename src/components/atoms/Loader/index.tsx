import cn from 'classnames';
import { useTranslations } from 'next-intl';
import type { JSX } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import { Loader as LoaderProps } from './types';
import styles from './Loader.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Loader = ({ size = 'md', modLabelVisible, className }: LoaderProps): JSX.Element => {
  const t = useTranslations('common');

  const classNames = cn('loader', `loader--${size}`, className);

  return (
    <div className={classNames}>
      <div className="loader__spinner"></div>
      <div className={cn('loader__label', !modLabelVisible && 'u-visually-hidden')}>
        {t('loading')}
      </div>
    </div>
  );
};

export default Loader;
