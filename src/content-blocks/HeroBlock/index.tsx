import BlockContainer from '@/components/atoms/BlockContainer';
import Hero from '@/components/organisms/Hero';
import { HeroBlock as HeroBlockProps } from './types';
import { SocialsCta } from '@/components/molecules/SocialsCta/types';

type Props = HeroBlockProps & React.HTMLAttributes<HTMLElement>;

const HeroBlock = ({
  title,
  subtitle,
  variant,
  callToAction,
  socialsCta,
  yearTheme,
  bgImage,
}: Props) => {
  const socialsCallToAction: SocialsCta = {
    title: socialsCta?.title || '',
    socialItems: socialsCta?.socialItems.data.map((item: any) => {
      return item.attributes;
    }),
  };

  return (
    <BlockContainer
      bgImage={bgImage?.data?.attributes}
      socialsCta={socialsCta && socialsCallToAction}
      variant={variant === 'simple' ? 'light' : 'dark'}
      orientation="default"
      slug="hero"
    >
      <Hero
        title={title}
        subtitle={subtitle}
        variant={variant}
        callToAction={callToAction}
        yearTheme={yearTheme}
        className="sl-layout"
      />
    </BlockContainer>
  );
};

export default HeroBlock;
