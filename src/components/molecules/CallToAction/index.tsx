import classNames from 'classnames';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Button from '@/components/atoms/Button';
import styles from './CallToAction.css';
import { CallToAction as CallToActionProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const CallToAction = ({
  title,
  intro,
  ctaLabel,
  ctaLink,
  className,
}: CallToActionProps): JSX.Element => {
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
