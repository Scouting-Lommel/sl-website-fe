import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PropTypes from "prop-types";
import styles from "./RichText.module.scss";

const RichText = ({ data }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className={styles["rich-text"]}>
      {data}
    </ReactMarkdown>
  );
};

RichText.propTypes = {
  data: PropTypes.string.isRequired,
};

export default RichText;
