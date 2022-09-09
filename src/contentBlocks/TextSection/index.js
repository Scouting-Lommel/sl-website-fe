import { TextSection } from "@/components/organisms/TextSection";

const TextSectionBlock = ({ Title, Text }) => {
  const data = { Title, Text };

  return <TextSection info={data} />;
};

export default TextSectionBlock;
