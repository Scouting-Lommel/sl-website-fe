import classNames from 'classnames';
import SLImage from '@/components/atoms/Image';
import SLLink from '@/components/atoms/Link';
import { SocialsCta as SocialsCtaProps } from './types';
import styles from './SocialsCta.module.scss';
import { IconFacebook, IconInstagram, IconTikTok } from '@/assets/icons';
import Icon from '@/components/atoms/Icon';
import { ComponentType } from 'react';

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
    <div className={classNames([styles['socialsCta'], className])}>
      <div className={styles['socialsCta__copy']}>
        <div className={styles['socialsCta__copy__title']}>{title}</div>
      </div>
      <div className={styles['socialsCta__socials']}>
        {socialItems?.map((item, i) => {
          return (
            <SLLink
              key={i}
              href={item.link}
              className={styles['socialsCta__socials__item']}
              variant={'link1'}
            >
              <Icon
                title={item.title}
                icon={icons[item.icon]}
                className={styles['socialsCta__socials__item__icon']}
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
