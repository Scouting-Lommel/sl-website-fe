import Typography from '@/components/atoms/Typography';
import { Paragraph as ParagraphProps } from './type';
import styles from './Paragraph.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ParagraphProps & React.HTMLAttributes<HTMLElement>;

const Paragraph = ({ title, content }: Props) => {
  return (
    <section id={title.toLowerCase().replaceAll(' ', '-')} className="paragraph">
      <div className="paragraph__title">
        <a
          href={`#${title.toLowerCase().replaceAll(' ', '-')}`}
          className="paragraph__title__anchor t-headline-3"
        >
          #
        </a>
        <h3 className="paragraph__title__copy">{title.toUpperCase()}</h3>
      </div>

      <Typography data={content} />
    </section>
  );
};

export default Paragraph;
