import { Leader as LeaderProps } from './types';
import styles from './Leader.css';
import Typography from '@/components/atoms/Typography';
import SLImage from '@/components/atoms/Image';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = LeaderProps & React.HTMLAttributes<HTMLElement>;

const Leader = ({ firstName, lastName, image }: Props) => {
  return (
    <div className="leader__container">
      <SLImage
        data={image.data.attributes}
        loadingStrategy={'lazy'}
        className="leader__image"
        loadingStrategy="lazy"
      />
      <Typography className="leader__name">{firstName}</Typography>
      <Typography className="leader__name">{lastName}</Typography>
    </div>
  );
};

export default Leader;
