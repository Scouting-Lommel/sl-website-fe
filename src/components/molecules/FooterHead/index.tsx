import { FooterHead as FooterHeadProps } from './types';
import styles from './FooterHead.module.scss';

type Props = FooterHeadProps & React.HTMLAttributes<HTMLElement>;

const FooterHead = ({ siteName, vatNumber, groupNumber }: Props) => {
  return (
    <div className={styles['footer-head']}>
      <h2 className={styles['footer-head__title']}>{siteName}</h2>
      <p className={styles['footer-head__info']}>
        {vatNumber} • {groupNumber}
      </p>
    </div>
  );
};

export default FooterHead;
