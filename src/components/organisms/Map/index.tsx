import { MapEmbedProps as mapsProps } from './types';
// @ts-ignore
import styles from './Map.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = mapsProps & React.HTMLAttributes<HTMLElement>;

const GoogleMap = ({ title, className }: Props) => {
  return (
    <div className={className}>
      <h2 className="t-headline-2 t-align-center">{title}</h2>
      <div className="map__container">
        <iframe
          className="map"
          id="gmap_canvas"
          loading="lazy"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.5808726931305!2d5.299091176604409!3d51.24521347175483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d2a30241cfb9%3A0xa6aff1233d34c53!2sScouting%20Lommel!5e0!3m2!1sen!2sbe!4v1692796045208!5m2!1sen!2sbe"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
