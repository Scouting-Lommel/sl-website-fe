import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Typography.module.scss';

const Typography = ({ data, modNoStyle, children, className }) => {
  const typographyClasses = classNames([
    styles['typography'],
    !modNoStyle && styles['typography--styled'],
    className,
  ]);

  if (data) {
    return (
      <ReactMarkdown remarkPlugins={[remarkGfm]} className={typographyClasses}>
        {data}
      </ReactMarkdown>
    );
  }

  return <div className={typographyClasses}>{children}</div>;
};

Typography.propTypes = {
  data: PropTypes.string.isRequired,
  modNoStyle: PropTypes.bool,
};

export default Typography;
