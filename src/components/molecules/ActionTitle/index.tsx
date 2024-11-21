import { StylesheetLink } from '@/types/StyleSheetLink';
import Button from '@/components/atoms/Button';
import styles from './ActionTitle.css';
import { ActionTitle as ActionTitleProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const ActionTitle = ({ title, tagName = 'h2', button }: ActionTitleProps): JSX.Element => {
  const TagName = tagName;

  return (
    <div className="action-title">
      <TagName>{title}</TagName>
      <Button {...button} />
    </div>
  );
};

export default ActionTitle;
