import { Activity as ActivityProps } from './types';
import styles from './Activity.css';
import Typography from '../Typography';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = ActivityProps & React.HTMLAttributes<HTMLElement>;

const dayMap: { [key: number]: string } = {
  0: 'Zo',
  1: 'Ma',
  2: 'Di',
  3: 'Wo',
  4: 'Do',
  5: 'Vr',
  6: 'Za',
};

const Activity = ({ title, startDate, startTime, endDate, endTime, description }: Props) => {
  let firstLine = '';
  let secondLine = '';
  if (startDate === endDate) {
    const date = new Date(startDate);
    firstLine = `${
      dayMap[date.getDay()]
    } ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    secondLine = `Van ${startTime.slice(0, 5)} tot ${endTime.slice(0, 5)}`;
  } else {
    let date = new Date(startDate);
    firstLine = `Van ${
      dayMap[date.getDay()]
    } ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${startTime.slice(0, 5)}`;
    date = new Date(endDate);
    secondLine = `Tot ${
      dayMap[date.getDay()]
    } ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${endTime.slice(0, 5)}`;
  }

  return (
    <>
      <div className="activityContainer">
        <div className="activityHeader">
          <div className="activityTitle">{title}</div>
          <div className="activityTime">
            {firstLine} <br />
            {secondLine}
          </div>
        </div>
        <Typography className="activityDescription" data={description} />
      </div>
      <div className="activityBorderContainer">
        <div className="activityBorder"></div>
      </div>
    </>
  );
};

export default Activity;
