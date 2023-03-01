import useTranslation from 'next-translate/useTranslation';
import styles from './SkipToContent.module.scss';

const SkipToContent = () => {
  const { t } = useTranslation('common');
  return (
    <a href="#main" className={styles['skip-to-content']}>
      {t('Navigation.SkipToContent')}
    </a>
  );
};

export default SkipToContent;
