import cn from 'classnames';
import { StylesheetLink } from '@/types/StyleSheetLink';
import { Typography as TypographyProps } from './types';
import MarkdownRenderer from './renderers/MarkdownRenderer';
import StructuredTextRenderer from './renderers/StructuredTextRenderer';
import styles from './Typography.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Typography = ({
  data,
  modNoStyle,
  modPreWrap,
  variant = 'default',
  tagName = 'div',
  children,
  className,
}: TypographyProps): JSX.Element => {
  const typographyClasses = cn(
    'typography',
    `typography--${variant}`,
    !modNoStyle && 'typography--styled',
    modPreWrap && 'typography--pre-wrap',
    className,
  );

  const TagName = tagName as keyof JSX.IntrinsicElements;

  if (data && Array.isArray(data) && 'type' in (data[0] || {})) {
    return (
      <div className={typographyClasses}>
        <StructuredTextRenderer data={data} />
      </div>
    );
  }

  if (data && typeof data === 'string') {
    return <MarkdownRenderer data={data} className={typographyClasses} />;
  }

  if (children) {
    return <TagName className={typographyClasses}>{children}</TagName>;
  }

  return <></>;
};

export default Typography;
