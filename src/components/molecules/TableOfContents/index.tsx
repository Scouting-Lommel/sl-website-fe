import { StylesheetLink } from '@/types/StyleSheetLink';
import Typography from '@/components/atoms/Typography';
import { TableOfContents as TableOfContentsProps } from './types';
import styles from './TableOfContents.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const TableOfContents = ({ sections }: TableOfContentsProps): JSX.Element => {
  return (
    <ul className="table-of-contents">
      {sections.map((section, i) => {
        return (
          <li key={i} className="table-of-contents__item">
            <a href={'#' + section.title.toLowerCase().replaceAll(' ', '-')}>
              <Typography modNoStyle>
                <span className="table-of-contents__item__prefix">#</span> {section.title}
              </Typography>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TableOfContents;
