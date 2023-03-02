import classNames from 'classnames';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@/components/atoms/Typography';
import Title from '@/components/atoms/Title';
import SLLink from '@/components/atoms/Link';
import styles from './FooterInfo.module.scss';

const InfoCol = ({ title, address, links }) => {
  return (
    <div className={styles['info-col']}>
      <Title title={title} variant="h3" className={styles['info-col__title']} />

      {address ? (
        <div className={styles['info-col__content']}>
          <Typography data={address} />
        </div>
      ) : (
        links?.map((item, i) => {
          return (
            <SLLink
              key={i}
              href={item.link || '#'}
              label={item.label}
              variant="link1"
              className={classNames([
                styles['info-col__content'],
                styles['info-col__content--link'],
              ])}
            />
          );
        })
      )}
    </div>
  );
};

const FooterInfo = ({ address, contactItems, footerNavigation }) => {
  const { t } = useTranslation('common');

  return (
    <div className={styles['footer-info']}>
      <div className={styles['footer-info__section']}>
        <InfoCol title={t('Footer.Address')} address={address} />
        <InfoCol title={t('Footer.Contact')} links={contactItems} />
      </div>
      <div className={styles['footer-info__section']}>
        {footerNavigation.map((el, i) => {
          return <InfoCol key={i} title={el.title} links={el.navItems} />;
        })}
      </div>
    </div>
  );
};

InfoCol.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  links: PropTypes.array,
};

FooterInfo.propTypes = {
  address: PropTypes.string,
  contactItems: PropTypes.array,
  footerNavigation: PropTypes.array,
};

export default FooterInfo;
