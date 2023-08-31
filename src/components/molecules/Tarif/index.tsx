'use client';

import { Tarif as TarifProps } from './types';
import styles from './Tarif.css';
import Typography from '@/components/atoms/Typography';
import { useState } from 'react';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = TarifProps & React.HTMLAttributes<HTMLElement>;

const Tarif = ({ name, dayPrice, minimumPrice, example }: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="tarif__container">
      <div className="tarif__data">
        <Typography className="tarif__name" modPreWrap>
          {name}
        </Typography>
        <Typography className="tarif__min" modPreWrap>
          € {minimumPrice}
        </Typography>
        <Typography className="tarif__day" modPreWrap>
          € {dayPrice}
        </Typography>
        <div className="tarif__ex" onClick={() => setOpen(!isOpen)}>
          voorbeeld -&gt;
        </div>
      </div>
      {isOpen && <Typography data={example} modPreWrap className="tarif__ex__data" />}
    </div>
  );
};

export default Tarif;
