import classNames from 'classnames';
import SocialsCta from '@/components/molecules/SocialsCta';
import CallToAction from '@/components/molecules/CallToAction';
import { BlockContainer as BlockContainerProps } from './types';
import styles from './BlockContainer.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = BlockContainerProps & React.HTMLAttributes<HTMLElement>;

const BlockContainer = ({
  variant,
  orientation,
  slug,
  cta,
  socialsCta,
  bgImage,
  children,
}: Props) => {
  const bgClassnames = classNames(
    'block-container__bg-image',
    `block-container__bg-image--${variant}`,
    `block-container__bg-image--${orientation}`,
    bgImage && `block-container__bg-image--opaque`,
  );

  const ctaClassnames = classNames(
    'block-container__cta',
    socialsCta && 'block-container__cta--bottom',
    !socialsCta && 'block-container__cta--top',
  );

  return (
    <section id={slug} className="block-container">
      <div className={bgClassnames}>
        {bgImage && (
          <img
            className="block-container__bg-image__img"
            alt={bgImage?.alternativeText}
            src={bgImage?.url}
            sizes="100vw"
            loading="eager"
          />
        )}
      </div>
      <div className="block-container__content">{children}</div>
      {cta && (
        <CallToAction
          title={cta.title}
          intro={cta.intro}
          ctaLabel={cta.ctaLabel}
          ctaLink={cta.ctaLink}
          className={ctaClassnames}
        />
      )}
      {socialsCta && (
        <SocialsCta
          title={socialsCta.title}
          socialItems={socialsCta.socialItems}
          className={ctaClassnames}
        />
      )}
    </section>
  );
};

export default BlockContainer;
