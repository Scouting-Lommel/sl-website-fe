import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import styles from './SkipToContent.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = React.HTMLAttributes<HTMLElement>;

const SkipToContent = ({ className }: Props) => {
  const t = useTranslations('common');

  const classes = classNames('skip-to-content', className);

  return (
    <a href="#main" className={classes}>
      {t('skipToContent')}
    </a>
  );
};

export default SkipToContent;
