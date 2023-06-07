import FooterHead from '@/components/molecules/FooterHead';
import FooterDisclosure from '@/components/molecules/FooterDisclosure';
import FooterDoormat from '@/components/molecules/FooterDoormat';
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
        <FooterDoormat
          address={general?.generalData.data.attributes.address}
          contactItems={general?.generalData.data.attributes.contactItems}
          footerNavigation={general?.generalData.data.attributes.footerNavigation}
        />
        <FooterDisclosure siteName={general?.generalData.data.attributes.siteName} />
      </div>
    </footer>
  );
};

export { Footer };
