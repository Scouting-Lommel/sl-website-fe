import { StylesheetLink } from '@/types/StyleSheetLink';
import Typography from '@/components/atoms/Typography';
import { TableOfContents as TableOfContentsProps } from './types';
import styles from './TableOfContents.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const TableOfContents = ({ sections }: TableOfContentsProps): JSX.Element => {
  return (
    <div className="table-of-contents">
      {sections.map((section, i) => {
        return (
          <a
            href={'#' + section.title.toLowerCase().replaceAll(' ', '-')}
            key={i}
            className="table-of-contents__item"
          >
            <Typography modNoStyle>
              <span className="table-of-contents__item__prefix">#</span> {section.title}
            </Typography>
          </a>
        );
      })}
    </div>
  );
};

export default TableOfContents;
