import Typography from '@/components/atoms/Typography';
import { TableOfContents as TableOfContentsProps } from './type';
import styles from './TableOfContents.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = TableOfContentsProps & React.HTMLAttributes<HTMLElement>;

const TableOfContents = ({ sections }: Props) => {
  return (
    <div className="table-of-contents">
      {sections.map((section, i) => {
        return (
          <a
            href={'#' + section.title.toLowerCase().replaceAll(' ', '-')}
            key={i}
            className="table-of-contents__item"
          >
            <Typography modNoStyle># {section.title}</Typography>
          </a>
        );
      })}
    </div>
  );
};

export default TableOfContents;
