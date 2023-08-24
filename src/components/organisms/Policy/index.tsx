import { Policy as PolicyProps } from './types';
import styles from './Policy.css';
import Typography from '@/components/atoms/Typography';
import Section from '@/components/molecules/Section';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = PolicyProps & React.HTMLAttributes<HTMLElement>;

const Policy = ({ sections }: Props) => {
  return (
    <>
      <div className="policy__TOC">
        {sections.map((section, i) => {
          return (
            <a href={'#' + section.title.toUpperCase()} key={i} className="policy__TOC__text">
              <Typography modPreWrap> # {section.title.toUpperCase()}</Typography>
            </a>
          );
        })}
      </div>
      {sections.map((section, i) => {
        return (
          <Section
            title={section.title}
            content={section.content}
            key={i}
            final={i + 1 === sections.length}
          />
        );
      })}
    </>
  );
};

export default Policy;
