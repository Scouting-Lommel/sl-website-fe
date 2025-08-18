import type { JSX } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Paragraph from '@/components/molecules/Paragraph';
import TableOfContents from '@/components/molecules/TableOfContents';
import { Policy as PolicyProps } from './types';
import styles from './Policy.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Policy = ({ sections }: PolicyProps): JSX.Element => {
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
