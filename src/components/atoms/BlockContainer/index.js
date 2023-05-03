import classNames from 'classnames';
import PropTypes from 'prop-types';
import CallToAction from '@/components/molecules/CallToAction';
import styles from './BlockContainer.module.scss';

const BlockContainer = ({ variant, orientation, cta, slug, bgImage, modCtaSocials, children }) => {
  const bgClassnames = classNames([
    styles['block-container__bg-image'],
    styles[`block-container__bg-image--${variant}`],
    styles[`block-container__bg-image--${orientation}`],
    bgImage && styles[`block-container__bg-image--opaque`],
  ]);

  const ctaClassnames = classNames([
    styles['block-container__cta'],
    modCtaSocials && styles['block-container__cta--bottom'],
    !modCtaSocials && styles['block-container__cta--top'],
  ]);

  return (
    <section id={slug} className={styles['block-container']}>
      <div className={bgClassnames}>
        {bgImage && (
          <img
            className={styles['image__img']}
            alt={bgImage?.alternativeText}
            src={bgImage?.url}
            sizes="100vw"
            loading="eager"
          />
        )}
      </div>
      <div className={styles['block-container__content']}>{children}</div>
      {cta && (
        <CallToAction
          title={cta.title}
          subtitle={cta.intro}
          buttonLabel={cta.ctaLabel}
          buttonLink={cta.ctaLink}
          modSocials={modCtaSocials}
          className={ctaClassnames}
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
