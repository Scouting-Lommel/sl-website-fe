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
    <div className="tarif">
      <div className="tarif__data">
        <Typography className="tarif__name" modPreWrap modNoStyle>
          {name}
        </Typography>
        <Typography className="tarif__min" modPreWrap modNoStyle>
          € {minimumPrice}
        </Typography>
        <Typography className="tarif__day" modPreWrap modNoStyle>
          € {dayPrice}
        </Typography>
        <div className="tarif__example" onClick={() => setOpen(!isOpen)}>
          voorbeeld -&gt;
        </div>
      </div>
      {isOpen && <Typography data={example} modPreWrap className="tarif__example__content" />}
    </div>
  );
};

export default Tarif;
