import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import classNames from 'classnames';
import rehypeRaw from 'rehype-raw';
import sanitizeHtml from 'sanitize-html';
import { Typography as TypographyProps } from './types';
import styles from './Typography.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = TypographyProps & React.HTMLAttributes<HTMLElement>;

const Typography = ({ data, modNoStyle, modPreWrap, children, className }: Props) => {
  const typographyClasses = classNames(
    'typography',
    !modNoStyle && 'typography--styled',
    modPreWrap && 'typography--pre-wrap',
    className,
  );

  if (data) {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className={typographyClasses}
        // @ts-ignore
        rehypePlugins={[rehypeRaw]}
      >
        {sanitizeHtml(data)}
      </ReactMarkdown>
    );
  }

  return <div className={typographyClasses}>{children}</div>;
};

export default Typography;
