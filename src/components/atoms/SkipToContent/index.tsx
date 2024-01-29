import classNames from 'classnames';
import styles from './SkipToContent.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = React.HTMLAttributes<HTMLElement>;

const SkipToContent = ({ className }: Props) => {
  const classes = classNames('skip-to-content', className);

  return (
    <a href="#main" className={classes}>
      Spring naar inhoud
    </a>
  );
};

export default SkipToContent;
