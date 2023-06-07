import FooterHead from '@/components/molecules/FooterHead';
import FooterBottom from '@/components/molecules/FooterBottom';
import FooterInfo from '@/components/molecules/FooterInfo';
import styles from './Footer.module.scss';

const Footer = () => {
  const general = undefined;

  return (
    <footer className={styles['footer']}>
      <div className="sl-layout">
        <FooterHead
          siteName={general?.generalData.data.attributes.siteName}
          vatNumber={general?.generalData.data.attributes.vatNumber}
          groupNumber={general?.generalData.data.attributes.groupNumber}
        />
        <FooterInfo
          address={general?.generalData.data.attributes.address}
          contactItems={general?.generalData.data.attributes.contactItems}
          footerNavigation={general?.generalData.data.attributes.footerNavigation}
        />
        <FooterBottom siteName={general?.generalData.data.attributes.siteName} />
      </div>
    </footer>
  );
};

export { Footer };
