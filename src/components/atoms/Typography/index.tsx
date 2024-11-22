import cn from 'classnames';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import sanitizeHtml from 'sanitize-html';
import { StylesheetLink } from '@/types/StyleSheetLink';
import { Typography as TypographyProps } from './types';
import styles from './Typography.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Typography = ({
  data,
  modNoStyle,
  modPreWrap,
  tagName = 'div',
  children,
  className,
}: TypographyProps): JSX.Element => {
  const typographyClasses = cn(
    'typography',
    !modNoStyle && 'typography--styled',
    modPreWrap && 'typography--pre-wrap',
    className,
  );

  const TagName = tagName as keyof JSX.IntrinsicElements;

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

  return <TagName className={typographyClasses}>{children}</TagName>;
};

export default Typography;
