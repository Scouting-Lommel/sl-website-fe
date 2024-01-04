import Typography from '@/components/atoms/Typography';
import { TOC as TOCProps } from './type';
// @ts-ignore
import styles from './TOC.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = TOCProps & React.HTMLAttributes<HTMLElement>;

const TableOfContents = ({ sections }: Props) => {
  return (
    <div className="TOC">
      {sections.map((section, i) => {
        return (
          <a
            href={'#' + section.title.toUpperCase().replaceAll(' ', '_')}
            key={i}
            className="TOC__item"
          >
            <Typography> # {section.title}</Typography>
          </a>
        );
      })}
    </div>
  );
};

export default TableOfContents;
