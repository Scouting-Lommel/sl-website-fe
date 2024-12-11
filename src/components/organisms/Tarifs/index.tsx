import { useTranslations } from 'next-intl';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';
import Tarif from '@/components/molecules/Tarif';
import { Tarifs as TarifsProps } from './types';
import styles from './Tarifs.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Tarifs = ({ tarifs, cta }: TarifsProps): JSX.Element => {
  const t = useTranslations('common.tarifs');

  return (
    <div className="tarifs">
      <div className="tarifs__wrapper">
        <div className="tarifs__tarifs">
          <div className="tarifs__header">
            <Typography className="tarifs__header__min-price">{t('minPrice')}</Typography>
            <Typography className="tarifs__header__price-pp">
              {t('pricePerPersonPerNight')}
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
        </div>
      </div>
      <div className="tarifs__cta__container">
        <Typography className="tarifs__cta__data__intro" data={cta.intro} />
        {cta && cta.ctaLabel && cta.ctaLink && (
          <div className="tarifs__cta__data__button">
            <Button label={cta.ctaLabel} href={cta.ctaLink || ''} variant="primary" modSmall />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tarifs;
