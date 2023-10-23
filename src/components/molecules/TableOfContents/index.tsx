import { TOC as TOCProps } from './type';
import styles from './TOC.css';
import Typography from '@/components/atoms/Typography';

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
            <Typography modPreWrap> # {section.title}</Typography>
          </a>
        );
      })}
    </div>
  );
};

export default TableOfContents;
