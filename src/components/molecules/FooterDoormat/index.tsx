import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import Title from '@/components/atoms/Title';
import SLLink from '@/components/atoms/Link';
import { FooterDoormat as FooterDoormatProps, DoormatCol as DoormatColProps } from './types';
import styles from './FooterDoormat.module.scss';

type DoormatProps = FooterDoormatProps & React.HTMLAttributes<HTMLElement>;
type ColProps = DoormatColProps & React.HTMLAttributes<HTMLElement>;

const DoormatCol = ({ title, address, links }: ColProps) => {
  return (
    <div className={styles['doormat-col']}>
      <Title title={title} variant="h3" className={styles['doormat-col__title']} />

      {address ? (
        <div className={styles['doormat-col__content']}>
          <Typography data={address} modNoStyle />
        </div>
      ) : (
        links?.map((item, i) => {
          return (
            <SLLink
              key={i}
              href={item.link || '#'}
              variant="link1"
              className={classNames([
                styles['doormat-col__content'],
                styles['doormat-col__content--link'],
              ])}
            >
              {item.label}
            </SLLink>
          );
        })
      )}
    </div>
  );
};

const FooterDoormat = ({ address, contactItems, footerNavigation }: DoormatProps) => {
  return (
    <div className={styles['footer-doormat']}>
      <div className={styles['footer-doormat__section']}>
        <DoormatCol title="Adres" address={address} />
        <DoormatCol title="Contact" links={contactItems} />
      </div>
      <div className={styles['footer-doormat__section']}>
        {footerNavigation.map((el, i) => {
          return <DoormatCol key={i} title={el.title} links={el.navItems} />;
        })}
      </div>
    </div>
  );
};

export default FooterDoormat;
