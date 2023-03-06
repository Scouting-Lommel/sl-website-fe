import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@/components/atoms/Typography';
import styles from './Title.module.scss';

const Title = ({
  title,
  variant,
  style,
  tagName,
  modLight,
  modAccent,
  modPrimary,
  modMarkup,
  className,
}) => {
  const titleStyle = style ? style : variant;
  const TagName = tagName ?? variant;

  const titleClassNames = classNames([
    styles['title'],
    styles[`title--${titleStyle}`],
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

  return <TagName className={titleClassNames}>{title}</TagName>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['h1', 'h1-alt', 'h2', 'h3']),
  style: PropTypes.oneOf(['h1', 'h1-alt', 'h2', 'h3']),
  modLight: PropTypes.bool,
  modAccent: PropTypes.bool,
  modPrimary: PropTypes.bool,
  modMarkup: PropTypes.bool,
};

Title.defaultProps = {
  variant: 'h1',
};

export default Title;
