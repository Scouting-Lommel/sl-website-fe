import cn from 'classnames';
import { StylesheetLink } from '@/types/StyleSheetLink';
import SLImage from '@/components/atoms/Image';
import CallToAction from '@/components/molecules/CallToAction';
import SocialsCta from '@/components/molecules/SocialsCta';
import styles from './BlockContainer.css';
import { BlockContainer as BlockContainerProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const BlockContainer = ({
  variant = 'light',
  orientation = 'default',
  slug,
  cta,
  socialsCta,
  bgImage,
  modSmallPadding,
  modNoPadding,
  modMargin,
  children,
}: BlockContainerProps): JSX.Element => {
  const blockContainerClassNames = cn(
    'block-container',
    `block-container--${variant}`,
    `block-container--${orientation}`,
    modSmallPadding && 'block-container--small-padding',
    modNoPadding && 'block-container--no-padding',
    modMargin && 'block-container--has-margin',
  );

  const bgClassnames = cn(
    'block-container__bg-image',
    bgImage && `block-container__bg-image--opaque`,
  );

  const ctaClassnames = cn(
    'block-container__cta',
    socialsCta && 'block-container__cta--bottom',
    !socialsCta && 'block-container__cta--top',
  );

  return (
    <section id={slug} className={blockContainerClassNames}>
      <div className={bgClassnames}>
        {bgImage && (
          <div className="block-container__bg-image__img">
            <SLImage data={bgImage} />
          </div>
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
