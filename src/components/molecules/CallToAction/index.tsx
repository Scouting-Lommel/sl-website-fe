import classNames from 'classnames';
// import { useContext } from 'react';
// import { GeneralContext } from '@/context/GeneralContext';
// import SLImage from '@/components/atoms/Image';
// import SLLink from '@/components/atoms/Link';
import Button from '@/components/atoms/Button';
import { CallToActionProps } from './types';
import styles from './CallToAction.module.scss';

type Props = CallToActionProps & React.HTMLAttributes<HTMLElement>;

const CallToAction = ({ title, intro, ctaLabel, ctaLink, modSocials, className }: Props) => {
  // const { general } = useContext(GeneralContext);

  return (
    <div className={classNames([styles['cta'], className])}>
      <div className={styles['cta__copy']}>
        <div className={styles['cta__copy__title']}>{title}</div>
        <div className={styles['cta__copy__intro']}>{intro}</div>
      </div>
      {modSocials && (
        <div className={styles['cta__socials']}>
          {/* {general?.generalData?.data?.attributes?.socials?.data?.map((item, i) => {
            return (
              <SLLink
                key={i}
                href={item.attributes?.link}
                className={styles['cta__socials__item']}
                modExternal
              >
                <SLImage
                  data={item.attributes?.icon?.data?.attributes}
                  className={styles['cta__socials__item__icon']}
                />
              </SLLink>
            );
          })} */}
        </div>
      )}
      {ctaLabel && ctaLink && (
        <Button label={ctaLabel} href={ctaLink || ''} variant="primary" modSmall />
      )}
    </div>
  );
};

export default CallToAction;
