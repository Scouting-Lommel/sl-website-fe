import { MapEmbedProps as mapsProps } from './types';

type Props = mapsProps & React.HTMLAttributes<HTMLElement>;

const GoogleMapEmbedComponent = ({
  location = 'San Francisco, CA',
  width = 600,
  height = 450,
}: Props) => {
  const encodedLocation = encodeURIComponent(location);

  return (
    <div>
      <iframe
        width={width}
        height={height}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${encodedLocation}`}
      />
    </div>
  );
};

export default GoogleMapEmbedComponent;
