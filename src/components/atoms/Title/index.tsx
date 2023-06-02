import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import { Title as TitleProps } from './types';
import styles from './Title.module.scss';

type Props = TitleProps & React.HTMLAttributes<HTMLElement>;

const Title = ({
  title,
  variant = 'h1',
  titleStyle,
  tagName,
  modLight,
  modAccent,
  modPrimary,
  modMarkup,
  children,
  className,
}: Props) => {
  const style = titleStyle ? titleStyle : variant;
  const TagName: any = tagName ?? variant;

  const titleClassNames = classNames([
    styles['title'],
    styles[`title--${style}`],
    modLight && styles['title--light'],
    modAccent && styles['title--accent'],
    modPrimary && styles['title--primary'],
    className,
  ]);

  if (modMarkup) {
    return (
      <TagName className={titleClassNames}>
        <Typography data={title} modNoStyle />
      </TagName>
    );
  }

  return <TagName className={titleClassNames}>{children || title}</TagName>;
};

export default Title;
