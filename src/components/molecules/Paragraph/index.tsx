import Typography from '@/components/atoms/Typography';
import { Paragraph as ParagraphProps } from './type';
import styles from './Paragraph.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ParagraphProps & React.HTMLAttributes<HTMLElement>;

const Paragraph = ({ title, content }: Props) => {
  return (
    <section id={title.toLowerCase().replaceAll(' ', '-')} className="Paragraph">
      <h3># {title.toUpperCase()}</h3>
      <Typography data={content} />
    </section>
  );
};

export default Paragraph;
