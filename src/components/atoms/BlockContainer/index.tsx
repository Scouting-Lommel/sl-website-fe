import classNames from 'classnames';
import CallToAction from '@/components/molecules/CallToAction';
import { BlockContainer as BlockContainerProps } from './types';
import styles from './BlockContainer.module.scss';

type Props = BlockContainerProps & React.HTMLAttributes<HTMLElement>;

const BlockContainer = ({
  variant,
  orientation,
  slug,
  cta,
  bgImage,
  modCtaSocials,
  children,
}: Props) => {
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
          intro={cta.intro}
          ctaLabel={cta.ctaLabel}
          ctaLink={cta.ctaLink}
          modSocials={modCtaSocials}
          className={ctaClassnames}
        />
      )}
    </section>
  );
};

export default BlockContainer;
