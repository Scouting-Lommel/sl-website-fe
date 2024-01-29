import classNames from 'classnames';
import Button from '@/components/atoms/Button';
import { CallToAction as CallToActionProps } from './types';
import styles from './CallToAction.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = CallToActionProps & React.HTMLAttributes<HTMLElement>;

const CallToAction = ({ title, intro, ctaLabel, ctaLink, className }: Props) => {
  return (
    <div className={classNames('cta', className)}>
      <div className="cta__copy">
        <div className="cta__copy__title">{title}</div>
        <div className="cta__copy__intro">{intro}</div>
      </div>
      {ctaLabel && ctaLink && (
        <Button label={ctaLabel} href={ctaLink || ''} variant="primary" modSmall />
      )}
    </div>
  );
};

export default CallToAction;
