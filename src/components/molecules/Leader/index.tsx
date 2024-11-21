import Image from 'next/image';
import { StylesheetLink } from '@/types/StyleSheetLink';
import ProfilePicture from '@/assets/img/default-avatar.png';
import SLImage from '@/components/atoms/Image';
import Typography from '@/components/atoms/Typography';
import styles from './Leader.css';
import { Leader as LeaderProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Leader = ({ firstName, lastName, image }: LeaderProps): JSX.Element => {
  return (
    <div className="leader__container">
      {image.data?.attributes ? (
        <SLImage
          data={image.data?.attributes}
          loadingStrategy="lazy"
          className="leader__image"
          modMaximisable
        />
      ) : (
        <Image src={ProfilePicture} alt="default profile picture" className="leader__image" />
      )}
      <Typography className="leader__name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </Typography>
    </div>
  );
};

export default Leader;
