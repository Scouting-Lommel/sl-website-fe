import classNames from 'classnames';
import SLImage from '@/components/atoms/Image';
import SocialsCta from '@/components/molecules/SocialsCta';
import CallToAction from '@/components/molecules/CallToAction';
import { BlockContainer as BlockContainerProps } from './types';
import styles from './BlockContainer.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = BlockContainerProps & React.HTMLAttributes<HTMLElement>;

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
}: Props) => {
  const blockContainerClassNames = classNames(
    'block-container',
    `block-container--${variant}`,
    `block-container--${orientation}`,
    modSmallPadding && 'block-container--small-padding',
    modNoPadding && 'block-container--no-padding',
    modMargin && 'block-container--has-margin',
  );

  const bgClassnames = classNames(
    'block-container__bg-image',
    bgImage && `block-container__bg-image--opaque`,
  );

  const ctaClassnames = classNames(
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
