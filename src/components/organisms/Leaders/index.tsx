import { StylesheetLink } from '@/types/StyleSheetLink';
import Leader from '@/components/molecules/Leader';
import { Leaders as LeadersProps } from './types';
import styles from './Leader.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = LeadersProps & React.HTMLAttributes<HTMLElement>;

const Leaders = ({ leaders }: Props) => {
  return (
    <div className="leaders__container">
      <div className="leaders">
        {leaders.map((leader, i) => {
          if (leader.attributes.active) {
            return (
              <Leader
                active={leader.attributes.active}
                firstName={leader.attributes.firstName}
                lastName={leader.attributes.lastName}
                image={leader.attributes.image}
                key={i}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Leaders;
