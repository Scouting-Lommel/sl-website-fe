import { StylesheetLink } from '@/types/StyleSheetLink';
import styles from './FooterHead.css';
import { FooterHead as FooterHeadProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const FooterHead = ({ siteName, vatNumber, groupNumber }: FooterHeadProps): JSX.Element => {
  return (
    <div className="footer-head">
      <h2 className="footer-head__title">{siteName}</h2>
      <p className="footer-head__info">
        {vatNumber ? `${vatNumber} •` : ''} {groupNumber}
      </p>
    </div>
  );
};

export default FooterHead;
