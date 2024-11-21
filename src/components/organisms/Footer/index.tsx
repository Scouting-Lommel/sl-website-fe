import { StylesheetLink } from '@/types/StyleSheetLink';
import FooterDisclosure from '@/components/molecules/FooterDisclosure';
import FooterDoormat from '@/components/molecules/FooterDoormat';
import FooterHead from '@/components/molecules/FooterHead';
import styles from './Footer.css';
import { Footer as FooterProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FooterProps & React.HTMLAttributes<HTMLElement>;

const Footer = ({
  siteName,
  vatNumber,
  groupNumber,
  address,
  contactItems,
  footerNavigation,
}: Props) => {
  return (
    <footer className="footer">
      <div className="sl-layout">
        <FooterHead siteName={siteName} vatNumber={vatNumber} groupNumber={groupNumber} />
        <FooterDoormat
          address={address}
          contactItems={contactItems}
          footerNavigation={footerNavigation}
        />
        <FooterDisclosure siteName={siteName} />
      </div>
    </footer>
  );
};

export default Footer;
