import { StylesheetLink } from '@/types/StyleSheetLink';
import ManualCard from '@/components/molecules/ManualCard';
import { ManualCards as ManualCardsProps } from './types';
import styles from './ManualCards.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

// const Leaders = ({ leaders }: LeadersProps): JSX.Element => {
const ManualCards = ({ manualCards }: ManualCardsProps): JSX.Element => {
  return (
    <div className="manual-cards sl-layout">
      {manualCards &&
        Boolean(manualCards.length) &&
        manualCards.map((manualCard, i) => (
          <>
            <ManualCard key={manualCard.id} {...manualCard} />
            {i < manualCards.length - 1 && <hr />}
          </>
        ))}
    </div>
  );
};

export default ManualCards;
