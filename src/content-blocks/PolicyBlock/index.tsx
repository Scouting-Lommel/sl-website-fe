import Hero from '@/components/organisms/Hero';
import { PolicyBlock as PolicyBlockProps } from './types';
import Policy from '@/components/organisms/Policy';

type Props = PolicyBlockProps & React.HTMLAttributes<HTMLElement>;

const PolicyBlock = ({ title, sections }: Props) => {
  return (
    <div className="sl-layout">
      <Hero title={title} subtitle="" variant="simple" />
      <Policy sections={sections} />
    </div>
  );
};

export default PolicyBlock;
