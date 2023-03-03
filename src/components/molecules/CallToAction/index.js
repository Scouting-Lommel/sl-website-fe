import Title from '@/components/atoms/Title';
import classNames from 'classnames';
import styles from './CallToAction.module.scss';

const CallToAction = ({ cta, className }) => {
  return (
    <div className={classNames([styles['cta'], className])}>
      <div className={styles['cta__title']}>{cta.title}</div>
      <div className={styles['cta__intro']}>{cta.intro}</div>
    </div>
  );
};

export default CallToAction;
