import cx from 'classnames';
import { useTranslations } from 'next-intl';
import styles from './Loader.css';
import { Loader as LoaderProps } from './types';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = LoaderProps & React.HTMLAttributes<HTMLElement>;

const Loader = ({ size = 'md', modLabelVisible }: Props) => {
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
