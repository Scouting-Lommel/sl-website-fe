import type { JSX } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Leader from '@/components/molecules/Leader';
import { Leaders as LeadersProps } from './types';
import styles from './Leaders.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const Leaders = ({ leaders }: LeadersProps): JSX.Element => {
  return (
    <div className="leaders__container">
      <div className="leaders">
        {leaders.map((leader, i) => {
          return (
            <Leader
              firstName={leader.attributes.firstName}
              lastName={leader.attributes.lastName}
              image={leader.attributes.image}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Leaders;
