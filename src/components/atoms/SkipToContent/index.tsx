import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { StylesheetLink } from '@/types/StyleSheetLink';
import styles from './SkipToContent.css';
import { SkipToContent as SkipToContentProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const SkipToContent = ({ className }: SkipToContentProps): JSX.Element => {
  const t = useTranslations('common');

  const classes = classNames('skip-to-content', className);

  return (
    <a href="#main" className={classes}>
      {t('skipToContent')}
    </a>
  );
};

export default SkipToContent;
