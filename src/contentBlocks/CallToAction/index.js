import CallToAction from "@/components/organisms/CallToAction";

const CallToActionBlock = ({ Socials, CTAButton, Title, Content }) => {
  const info = { Socials, CTAButton, Title, Content };
  return <CallToAction info={info} />;
};

export default CallToActionBlock;
