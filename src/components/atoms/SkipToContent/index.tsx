import useTranslation from 'next-translate/useTranslation';
import styles from './SkipToContent.module.scss';
import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLElement>;

const SkipToContent = ({ className }: Props) => {
  const { t } = useTranslation('common');
  const classes = classNames([styles['skip-to-content'], className]);

  return (
    <a href="#main" className={classes}>
      {t('Navigation.SkipToContent')}
    </a>
  );
};

export default SkipToContent;
