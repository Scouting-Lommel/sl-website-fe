import { ActionTitle as ActionTitleProps } from './types';
import styles from './ActionTitle.css';
import Button from '@/components/atoms/Button';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ActionTitleProps & React.HTMLAttributes<HTMLElement>;

const ActionTitle = ({ title, tagName = 'h2', button }: Props) => {
  const TagName = tagName;

  return (
    <div className="action-title">
      <TagName>{title}</TagName>
      <Button {...button} />
    </div>
  );
};

export default ActionTitle;
