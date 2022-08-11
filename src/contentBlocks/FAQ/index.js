import FAQ from "@/components/organisms/FAQ";

const FAQBlock = ({ Title, QenAs }) => {
  const data = { Title, QenAs };

  return <FAQ info={data} />;
};

export default FAQBlock;
