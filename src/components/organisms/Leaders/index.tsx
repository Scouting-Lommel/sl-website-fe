import Leader from '@/components/molecules/Leader';
import { Leaders as LeadersProps } from './types';
import styles from './Leader.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = LeadersProps & React.HTMLAttributes<HTMLElement>;

const Leaders = ({ leaders }: Props) => {
  return (
    <div className="leaders__container">
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
  );
};

export default Leaders;
