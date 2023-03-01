import BlockContainer from '@/components/atoms/BlockContainer';
import Hero from '@/components/organisms/Hero';

const HeroBlock = ({ title, subtitle, variant, callToAction, socialsCta, yearTheme, bgImage }) => {
  return (
    <BlockContainer
      bgImage={bgImage.data.attributes}
      variant="dark"
      orientation="default"
      slug="hero"
    >
      <Hero
        title={title}
        subtitle={subtitle}
        variant={variant}
        callToAction={callToAction}
        socialsCta={socialsCta}
        yearTheme={yearTheme}
        bgImage={bgImage}
        className="sl-layout"
      />
    </BlockContainer>
  );
};

export default HeroBlock;
