import { FooterHead as FooterHeadProps } from './types';
import styles from './FooterHead.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FooterHeadProps & React.HTMLAttributes<HTMLElement>;

const FooterHead = ({ siteName, vatNumber, groupNumber }: Props) => {
  return (
    <div className="footer-head">
      <h2 className="footer-head__title">{siteName}</h2>
      <p className="footer-head__info">
        {vatNumber} • {groupNumber}
      </p>
    </div>
  );
};

export default FooterHead;
