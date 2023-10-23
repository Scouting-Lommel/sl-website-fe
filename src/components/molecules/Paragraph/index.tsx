import { Paragraph as ParagraphProps } from './type';
import styles from './Paragraph.css';
import Typography from '@/components/atoms/Typography';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ParagraphProps & React.HTMLAttributes<HTMLElement>;

const Paragraph = ({ title, content }: Props) => {
  return (
    <section id={title.toUpperCase().replaceAll(' ', '_')} className="Paragraph">
      <h3># {title.toUpperCase()}</h3>
      <Typography modPreWrap data={content} />
    </section>
  );
};

export default Paragraph;
