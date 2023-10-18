import { Tarifs as TarifsProps } from './types';
import styles from './Tarifs.css';
import Tarif from '@/components/molecules/Tarif';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = TarifsProps & React.HTMLAttributes<HTMLElement>;

const Tarifs = ({ tarifs, cta }: Props) => {
  return (
    <div className="tarifs">
      <div className="tarifs__container">
        <Typography className="tarifs__header__min-price" modPreWrap>
          Minimumprijs
        </Typography>
        <Typography className="tarifs__header__price-pp" modPreWrap>
          Prijs pp/nacht
        </Typography>
      </div>
      {tarifs.map((tarif, i) => {
        return (
          <Tarif
            key={i}
            dayPrice={tarif.attributes.dayPrice}
            example={tarif.attributes.example}
            minimumPrice={tarif.attributes.minimumPrice}
            name={tarif.attributes.name}
          />
        );
      })}
      <div className="tarifs__cta__container">
        <Typography className="tarifs__cta__data__intro" data={cta.intro} modPreWrap />
        <div className="tarifs__cta__data__button">
          <Button label={cta.ctaLabel} href={cta.ctaLink || ''} variant="primary" modSmall />
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
