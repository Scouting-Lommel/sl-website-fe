import classNames from 'classnames';
import { StylesheetLink } from '@/types/StyleSheetLink';
import { iconMap, IconNames } from '@/components/atoms/Icon/IconMap';
import SLLink from '@/components/atoms/Link';
import Icon from '@/components/atoms/Icon';
import { SocialsCta as SocialsCtaProps } from './types';
import styles from './SocialsCta.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const SocialsCta = ({ title, socialItems, className }: SocialsCtaProps): JSX.Element => {
  interface icons {
    [key: string]: IconNames;
  }
  const icons: icons = {
    facebook: 'facebook',
    instagram: 'instagram',
    tiktok: 'tiktok',
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
                name={icons[item.icon]}
                aria-label={item.title}
                size="lg"
                strokeWidth={2.5}
                className="socials-cta__socials__item__icon"
              />
            </SLLink>
          );
        })}
      </div>
    </div>
  );
};

export default SocialsCta;
