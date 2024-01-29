import { ComponentType } from 'react';
import classNames from 'classnames';
import { IconFacebook, IconInstagram, IconTikTok } from '@/assets/icons';
import SLLink from '@/components/atoms/Link';
import Icon from '@/components/atoms/Icon';
import { SocialsCta as SocialsCtaProps } from './types';
import styles from './SocialsCta.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = SocialsCtaProps & React.HTMLAttributes<HTMLElement>;

const SocialsCta = ({ title, socialItems, className }: Props) => {
  interface icons {
    [key: string]: ComponentType<{}>;
  }
  const icons: icons = {
    facebook: IconFacebook,
    instagram: IconInstagram,
    tiktok: IconTikTok,
  };

  return (
    <div className={classNames('socials-cta', className)}>
      <div className="socials-cta__copy">
        <div className="socials-cta__copy__title">{title}</div>
      </div>
      <div className="socials-cta__socials">
        {socialItems?.map((item, i) => {
          return (
            <SLLink
              key={i}
              href={item.link}
              className="socials-cta__socials__item"
              variant={'link1'}
            >
              <Icon
                title={item.title}
                icon={icons[item.icon]}
                className="socials-cta__socials__item__icon"
                size="lg"
              />
            </SLLink>
          );
        })}
      </div>
    </div>
  );
};

export default SocialsCta;
