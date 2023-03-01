import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Icon.module.scss';

const Icon = ({ modBlock, modInline, icon, title, className }) => {
  const classes = classNames([
    styles['icon'],
    modBlock ? styles['icon--block'] : null,
    modInline ? styles['icon--inline'] : null,
    className,
  ]);

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
  icon: PropTypes.func,
  modInline: PropTypes.bool,
  modBlock: PropTypes.bool,
  title: PropTypes.string,
};

Icon.defaultProps = {
  title: '',
};

export default Icon;

export { Icon };
