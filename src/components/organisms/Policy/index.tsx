import { StylesheetLink } from '@/types/StyleSheetLink';
import Paragraph from '@/components/molecules/Paragraph';
import TableOfContents from '@/components/molecules/TableOfContents';
import styles from './Policy.css';
import { Policy as PolicyProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = PolicyProps & React.HTMLAttributes<HTMLElement>;

const Policy = ({ sections }: Props) => {
  return (
    <>
      <TableOfContents sections={sections} />

      <div className="policy">
        {sections.map((section, i) => {
          return <Paragraph title={section.title} content={section.content} key={i} />;
        })}
      </div>
    </>
  );
};

export default Policy;
