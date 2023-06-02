import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import classNames from 'classnames';
import { Typography as TypographyProps } from './types';
import styles from './Typography.module.scss';

type Props = TypographyProps & React.HTMLAttributes<HTMLElement>;

const Typography = ({ data, modNoStyle, children, className }: Props) => {
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

export default Typography;
