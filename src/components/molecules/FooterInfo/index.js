import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from '@/components/atoms/Link';
import RichText from '@/components/atoms/RichtText';
import Title from '@/components/atoms/Title';
import styles from './FooterInfo.module.scss';

const InfoCol = ({ title, address, links }) => {
  return (
    <div className={styles['info-col']}>
      <Title title={title} variant="h3" className={styles['info-col__title']} />

      {address ? (
        <div className={styles['info-col__content']}>
          <RichText data={address} />
        </div>
      ) : (
        links?.map((item, i) => {
          return (
            <Link key={i} href={item.link || '#'}>
              <span
                className={classNames([
                  styles['info-col__content'],
                  styles['info-col__content--link'],
                ])}
              >
                {item.label}
              </span>
            </Link>
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

export default FooterInfo;
