import { Section as SectionProps } from './type';
import styles from './Section.css';
import Typography from '@/components/atoms/Typography';
import classNames from 'classnames';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = SectionProps & React.HTMLAttributes<HTMLElement>;

const Section = ({ title, content, final }: Props) => {
  return (
    <section id={title.toUpperCase()} className={classNames('section', final && 'section__final')}>
      <h3># {title.toUpperCase()}</h3>
      <Typography modPreWrap data={content} />
    </section>
  );
};

export default Section;
