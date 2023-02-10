import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './RichText.module.scss';

const RichText = ({ data, className }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className={classNames([styles['rich-text'], className])}
    >
      {data}
    </ReactMarkdown>
  );
};

RichText.propTypes = {
  data: PropTypes.string.isRequired,
};

export default RichText;
