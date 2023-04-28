import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Icon.module.scss';

const Icon = ({ icon, size, title, className }) => {
  const classes = classNames([styles['icon'], styles[`icon--${size}`], className]);

  if (!icon) {
    console.warn('Error: `icon` in <Icon /> is not defined.');
    return <></>;
  }

  const TagName = icon;

  return (
    <div className={classes}>
      <TagName title={title} className={styles['icon__svg']} />
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.elementType,
  size: PropTypes.oneOf('xs', 'sm', 'md', 'lg', 'xl'),
  title: PropTypes.string,
};

Icon.defaultProps = {
  title: '',
  size: 'md',
};

export default Icon;
