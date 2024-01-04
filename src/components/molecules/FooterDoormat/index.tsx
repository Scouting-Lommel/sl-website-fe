import Typography from '@/components/atoms/Typography';
import SLLink from '@/components/atoms/Link';
import { FooterDoormat as FooterDoormatProps, DoormatCol as DoormatColProps } from './types';
// @ts-ignore
import styles from './FooterDoormat.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type DoormatProps = FooterDoormatProps & React.HTMLAttributes<HTMLElement>;
type ColProps = DoormatColProps & React.HTMLAttributes<HTMLElement>;

const DoormatCol = ({ title, address, links }: ColProps) => {
  return (
    <div className="doormat-col">
      <h3 className="doormat-col__title">{title}</h3>

      {address ? (
        <div className="doormat-col__content">
          <Typography data={address} modNoStyle />
        </div>
      ) : (
        links?.map((item, i) => {
          return (
            <SLLink
              key={i}
              href={item.link || '#'}
              variant="link1"
              className="doormat-col__content doormat-col__content--link"
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
    <div className="footer-doormat">
      <div className="footer-doormat__section">
        <DoormatCol title="Adres" address={address} />
        <DoormatCol title="Contact" links={contactItems} />
      </div>
      <div className="footer-doormat__section">
        {footerNavigation.map((el, i) => {
          return <DoormatCol key={i} title={el.title} links={el.navItems} />;
        })}
      </div>
    </div>
  );
};

export default FooterDoormat;
