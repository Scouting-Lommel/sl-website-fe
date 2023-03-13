import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GeneralContext } from '@/context/GeneralContext';
import SLImage from '@/components/atoms/Image';
import SLLink from '@/components/atoms/Link';
import Button from '@/components/atoms/Button';
import styles from './CallToAction.module.scss';

const CallToAction = ({ title, subtitle, buttonLabel, buttonLink, modSocials, className }) => {
  const { general } = useContext(GeneralContext);

  return (
    <div className={classNames([styles['cta'], className])}>
      <div className={styles['cta__copy']}>
        <div className={styles['cta__copy__title']}>{title}</div>
        <div className={styles['cta__copy__intro']}>{subtitle}</div>
      </div>
      {modSocials && (
        <div className={styles['cta__socials']}>
          {general?.generalData?.data?.attributes?.socials?.data?.map((item, i) => {
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
          })}
        </div>
      )}
      {buttonLabel && buttonLink && (
        <Button label={buttonLabel} href={buttonLink || ''} modSmall modLink />
      )}
    </div>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonLink: PropTypes.string,
  modSocials: PropTypes.bool,
};

export default CallToAction;
