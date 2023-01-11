import Link from "@/components/atoms/Link";
import Image from "@/components/atoms/Image";
import Title from "@/components/atoms/Title";

const Hero = ({
  title,
  subtitle,
  variant,
  callToAction,
  socialsCta,
  yearTheme,
  bgImage,
}) => {
  return (
    <>
      <Title title={title} variant="h1" />
    </>
  );
};

export default Hero;
