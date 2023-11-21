import { FAQ as FAQProps } from './types';
import styles from './FAQ.css';
import Typography from '@/components/atoms/Typography';
import FAQItem from '@/components/molecules/FaqItem';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FAQProps & React.HTMLAttributes<HTMLElement>;

const FAQ = ({ title, bottomText, faqItems, className }: Props) => {
  return (
    <div className={className}>
      <h2 className="t-headline-2 t-align-center">{title}</h2>
      <div className="faq__container">
        {faqItems.map((item, i) => {
          return (
            <FAQItem
              question={item.attributes.question}
              answer={item.attributes.answer}
              image={item.attributes.image}
              callToAction={item.attributes.callToAction}
              finalQuestion={i + 1 === faqItems.length}
              key={i}
            />
          );
        })}
      </div>
      <Typography data={bottomText} className="faq__bottom-text" />
    </div>
  );
};

export default FAQ;
