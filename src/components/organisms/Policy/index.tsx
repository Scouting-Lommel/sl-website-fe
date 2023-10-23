import { Policy as PolicyProps } from './types';
import styles from './Policy.css';
import Typography from '@/components/atoms/Typography';
import Paragraph from '@/components/molecules/Paragraph';
import TableOfContents from '@/components/molecules/TableOfContents';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = PolicyProps & React.HTMLAttributes<HTMLElement>;

const Policy = ({ sections, title }: Props) => {
  return (
    <>
      <h1 className="t-headline-1-alt policy__title">
        <Typography data={title} modNoStyle modPreWrap />
      </h1>
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
