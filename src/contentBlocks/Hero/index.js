import Hero from "@/components/organisms/Hero";

const HeroBlock = ({ IsHomePage, Image, Links }) => {
  const info = { IsHomePage, Image, Links };

  return <Hero info={info} />;
};

export default HeroBlock;
