import classNames from 'classnames';
import Button from '@/components/atoms/Button';
import { CallToAction as CallToActionProps } from './types';
import styles from './CallToAction.module.scss';

type Props = CallToActionProps & React.HTMLAttributes<HTMLElement>;

const CallToAction = ({ title, intro, ctaLabel, ctaLink, className }: Props) => {
  return (
    <div className={classNames([styles['cta'], className])}>
      <div className={styles['cta__copy']}>
        <div className={styles['cta__copy__title']}>{title}</div>
        <div className={styles['cta__copy__intro']}>{intro}</div>
      </div>
      {ctaLabel && ctaLink && (
        <Button label={ctaLabel} href={ctaLink || ''} variant="primary" modSmall />
      )}
    </div>
  );
};

export default CallToAction;
