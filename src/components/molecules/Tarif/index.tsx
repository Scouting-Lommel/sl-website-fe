'use client';

import { useState } from 'react';
import Typography from '@/components/atoms/Typography';
import { Tarif as TarifProps } from './types';
// @ts-ignore
import styles from './Tarif.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = TarifProps & React.HTMLAttributes<HTMLElement>;

const Tarif = ({ name, dayPrice, minimumPrice, example }: Props) => {
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
