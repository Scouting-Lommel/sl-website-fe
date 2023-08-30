import BlockContainer from '@/components/atoms/BlockContainer';
import { TarifsBlock as TarifsBlockProps } from './types';

type Props = TarifsBlockProps & React.HTMLAttributes<HTMLElement>;

const TarifsBlock = ({ title, tarifs, cta, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties.variant}
      orientation={blockProperties.orientation}
      slug={blockProperties.slug}
      cta={cta}
    >
      <div className="sl-layout">
        <h2 className="t-headline-2 t-align-center">{title}</h2>
      </div>
    </BlockContainer>
  );
};

export default TarifsBlock;
