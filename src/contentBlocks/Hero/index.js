import Hero from "@/components/organisms/Hero";

const HeroBlock = ({ IsHomePage, Image, Links }) => {
  const data = { IsHomePage, Image, Links };

  return <Hero info={data} />;
};

export default HeroBlock;
