import { FAQ as FAQProps } from './types';
import styles from './FAQ.css';
import FAQItem from '@/components/molecules/FaqItem';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FAQProps & React.HTMLAttributes<HTMLElement>;

const FAQ = ({ title, faqItems, className }: Props) => {
  return (
    <div className={className}>
      <h2 className="t-headline-2 t-align-center">{title}</h2>
      <div className="FAQContainer">
        {faqItems.map((item, i) => {
          return (
            <FAQItem
              question={item.attributes.question}
              answer={item.attributes.answer}
              Image={item.attributes.Image}
              callToAction={item.attributes.callToAction}
              finalQuestion={i + 1 === faqItems.length}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
