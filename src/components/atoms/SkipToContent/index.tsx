import styles from './SkipToContent.module.scss';
import classNames from 'classnames';

type Props = React.HTMLAttributes<HTMLElement>;

const SkipToContent = ({ className }: Props) => {
  const classes = classNames([styles['skip-to-content'], className]);

  return (
    <a href="#main" className={classes}>
      Spring naar inhoud
    </a>
  );
};

export default SkipToContent;
