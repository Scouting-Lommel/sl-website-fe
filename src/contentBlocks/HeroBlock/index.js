import Hero from "@/components/organisms/Hero";

const HeroBlock = ({
  title,
  subtitle,
  variant,
  callToAction,
  socialsCta,
  yearTheme,
  bgImage,
}) => {
  return (
    <section>
      <Hero
        title={title}
        subtitle={subtitle}
        variant={variant}
        callToAction={callToAction}
        socialsCta={socialsCta}
        yearTheme={yearTheme}
        bgImage={bgImage}
      />
    </section>
  );
};

export default HeroBlock;
