import Image from 'next/image';
import Typography from '@/components/atoms/Typography';
import SLImage from '@/components/atoms/Image';
import ProfilePicture from '@/assets/img/default-avatar.png';
import { Leader as LeaderProps } from './types';
import styles from './Leader.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = LeaderProps & React.HTMLAttributes<HTMLElement>;

const Leader = ({ firstName, lastName, image }: Props) => {
  return (
    <div className="leader__container">
      {image.data?.attributes ? (
        <SLImage data={image.data?.attributes} loadingStrategy="lazy" className="leader__image" />
      ) : (
        <Image src={ProfilePicture} alt="default profile picture" className="leader__image" />
      )}
      <Typography className="leader__name">{firstName}</Typography>
      <Typography className="leader__name">{lastName}</Typography>
    </div>
  );
};

export default Leader;
