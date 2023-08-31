import BlockContainer from '@/components/atoms/BlockContainer';
import { TarifsBlock as TarifsBlockProps } from './types';
import Tarifs from '@/components/organisms/Tarifs';

type Props = TarifsBlockProps & React.HTMLAttributes<HTMLElement>;

const TarifsBlock = ({ title, tarifs, cta, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties.variant}
      orientation={blockProperties.orientation}
      slug={blockProperties.slug}
    >
      <div className="sl-layout">
        <h2 className="t-headline-2 t-align-center">{title}</h2>
        <Tarifs tarifs={tarifs.data} cta={cta} />
      </div>
    </BlockContainer>
  );
};

export default TarifsBlock;
