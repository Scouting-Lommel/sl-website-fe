import { PolicyBlock as PolicyBlockProps } from './types';
import Policy from '@/components/organisms/Policy';
import BlockContainer from '@/components/atoms/BlockContainer';
import HeroBlock from '../HeroBlock';

type Props = PolicyBlockProps & React.HTMLAttributes<HTMLElement>;

const PolicyBlock = ({ title, sections }: Props) => {
  return (
    <>
      <BlockContainer variant="light" orientation="default" slug={title + 'Policy'}>
        <div className="sl-layout">
          <Policy sections={sections} title={title} />
        </div>
      </BlockContainer>
    </>
  );
};

export default PolicyBlock;
