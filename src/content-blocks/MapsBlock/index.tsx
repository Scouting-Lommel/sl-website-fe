import BlockContainer from '@/components/atoms/BlockContainer';
import { MapBlock as MapBlockProps } from './types';
import GoogleMap from '@/components/organisms/Map';

type Props = MapBlockProps & React.HTMLAttributes<HTMLElement>;

const MapsBlock = ({ title, location, info, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties.variant === 'light' ? 'light' : 'dark'}
      orientation={blockProperties.orientation}
      slug={blockProperties.slug}
    >
      <GoogleMap title={title} location={location} info={info} className="sl-layout" />
    </BlockContainer>
  );
};

export default MapsBlock;
