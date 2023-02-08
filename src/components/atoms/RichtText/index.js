import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./RichText.module.scss";

const RichText = ({ data }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className={styles["rich-text"]}>
      {data}
    </ReactMarkdown>
  );
};

export default RichText;
