import cx from 'classnames';
import { useTranslations } from 'next-intl';
import { StylesheetLink } from '@/types/StyleSheetLink';
import { Loader as LoaderProps } from './types';
import styles from './Loader.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Loader = ({ size = 'md', modLabelVisible }: LoaderProps): JSX.Element => {
  const t = useTranslations('common');

  const classNames = cx('loader', `loader--${size}`);

  return (
    <div className={classNames}>
      <div className="loader__spinner"></div>
      <div className={cx('loader__label', !modLabelVisible && 'u-visually-hidden')}>
        {t('loading')}
      </div>
    </div>
  );
};

export default Loader;
