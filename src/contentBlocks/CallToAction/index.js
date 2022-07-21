import CallToAction from "@/components/organisms/CallToAction";

const CallToActionBlock = ({ Socials, CTAButton, Title, Content }) => {
  const data = { Socials, CTAButton, Title, Content };
  return <CallToAction info={data} />;
};

export default CallToActionBlock;
