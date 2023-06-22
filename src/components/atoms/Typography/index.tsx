import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import classNames from 'classnames';
import { Typography as TypographyProps } from './types';
import styles from './Typography.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = TypographyProps & React.HTMLAttributes<HTMLElement>;

const Typography = ({ data, modNoStyle, children, className }: Props) => {
  const typographyClasses = classNames(
    'typography',
    !modNoStyle && 'typography--styled',
    className,
  );

  if (data) {
    return (
      <ReactMarkdown remarkPlugins={[remarkGfm]} className={typographyClasses}>
        {data}
      </ReactMarkdown>
    );
  }

  return <div className={typographyClasses}>{children}</div>;
};

export default Typography;
