import BlockContainer from '@/components/atoms/BlockContainer';
import { MapBlock as MapBlockProps } from './types';
import GoogleMap from '@/components/organisms/Map';

type Props = MapBlockProps & React.HTMLAttributes<HTMLElement>;

const MapsBlock = ({ title, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties.variant === 'light' ? 'light' : 'dark'}
      orientation={blockProperties.orientation}
      slug={blockProperties.slug}
    >
      <GoogleMap title={title} className="sl-layout" />
    </BlockContainer>
  );
};

export default MapsBlock;
