'use client';

import { useState } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Typography from '@/components/atoms/Typography';
import styles from './Tarif.css';
import { Tarif as TarifProps } from './types';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Tarif = ({ name, dayPrice, minimumPrice, example }: TarifProps): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="tarif">
      <div className="tarif__data">
        <Typography className="tarif__name" modNoStyle>
          {name}
        </Typography>
        <Typography className="tarif__min" modNoStyle>
          € {minimumPrice}
        </Typography>
        <Typography className="tarif__day" modNoStyle>
          € {dayPrice}
        </Typography>
        <div className="tarif__example" onClick={() => setOpen(!isOpen)}>
          voorbeeld -&gt;
        </div>
      </div>
      {isOpen && <Typography data={example} className="tarif__example__content" />}
    </div>
  );
};

export default Tarif;
