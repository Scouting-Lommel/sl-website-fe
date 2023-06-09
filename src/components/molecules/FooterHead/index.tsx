import Title from '@/components/atoms/Title';
import { FooterHead as FooterHeadProps } from './types';
import styles from './FooterHead.module.scss';

type Props = FooterHeadProps & React.HTMLAttributes<HTMLElement>;

const FooterHead = ({ siteName, vatNumber, groupNumber }: Props) => {
  return (
    <div className={styles['footer-head']}>
      <Title title={siteName} variant="h2" className={styles['footer-head__title']} />
      <p className={styles['footer-head__info']}>
        {vatNumber} • {groupNumber}
      </p>
    </div>
  );
};

export default FooterHead;