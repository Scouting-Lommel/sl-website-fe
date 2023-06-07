import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@/components/atoms/Typography';
import Title from '@/components/atoms/Title';
import SLLink from '@/components/atoms/Link';
import styles from './FooterDoormat.module.scss';

const DoormatCol = ({ title, address, links }) => {
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

const FooterDoormat = ({ address, contactItems, footerNavigation }) => {
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

DoormatCol.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  links: PropTypes.array,
};

FooterDoormat.propTypes = {
  address: PropTypes.string,
  contactItems: PropTypes.array,
  footerNavigation: PropTypes.array,
};

export default FooterDoormat;
