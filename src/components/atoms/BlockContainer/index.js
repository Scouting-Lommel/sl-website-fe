import classNames from 'classnames';
import PropTypes from 'prop-types';
import CallToAction from '@/components/molecules/CallToAction';
import styles from './BlockContainer.module.scss';

const BlockContainer = ({ variant, orientation, cta, slug, bgImage, modCtaSocials, children }) => {
  const containerClassnames = classNames([
    styles['block-container'],
    styles[`block-container--${variant}`],
    styles[`block-container--${orientation}`],
    bgImage && styles[`block-container--opaque`],
  ]);

  return (
    <section id={slug} className={containerClassnames}>
      {bgImage && (
        <>
          <picture className={styles['block-container__bg-image']}>
            <img
              className={styles['image__img']}
              alt={bgImage?.alternativeText}
              src={bgImage?.url}
              srcSet={bgImage?.url}
              sizes={`100vw`}
              loading="eager"
            />
          </picture>
        </>
      )}
      <div className={styles['block-container__content']}>{children}</div>
      {cta && (
        <CallToAction
          title={cta.title}
          subtitle={cta.intro}
          buttonLabel={cta.ctaLabel}
          buttonLink={cta.ctaLink}
          modSocials={modCtaSocials}
          className={styles['block-container__cta']}
        />
      )}
    </section>
  );
};

BlockContainer.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark']),
  orientation: PropTypes.oneOf(['default', 'reversed']),
  cta: PropTypes.object,
  slug: PropTypes.string,
  bgImage: PropTypes.object,
  modCtaSocials: PropTypes.bool,
};

BlockContainer.defaultProps = {
  variant: 'light',
  orientation: 'default',
};

export default BlockContainer;
