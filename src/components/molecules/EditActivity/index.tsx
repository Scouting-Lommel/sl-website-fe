import { EditActivity as EditActivityProps } from './types';
import styles from './EditActivity.css';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = EditActivityProps & React.HTMLAttributes<HTMLElement>;

const EditActivity = ({
  uid,
  session,
  title,
  startDate,
  startTime,
  endDate,
  endTime,
  description,
}: Props) => {
  const start = startDate + 'T' + startTime.split(':')[0] + ':' + startTime.split(':')[1];
  const end = endDate + 'T' + endTime.split(':')[0] + ':' + endTime.split(':')[1];
  return (
    <div>
      <form
        onSubmit={(event) => edit_activity(event, uid, session)}
        className="edit_activity__form"
      >
        <h2 className="t-headline-2 t-align-center">Maak activiteit</h2>
        <div className="edit_activity__row__long">
          <label htmlFor="name" className="edit_activity__label">
            <Typography>Naam</Typography>
            <input
              defaultValue={title}
              className="edit_activity__input"
              id="name"
              name="name"
              type="text"
              required
            />
          </label>
        </div>
        <div className="edit_activity__row">
          <label htmlFor="startdate" className="edit_activity__label">
            <Typography>Startdatum</Typography>
            <input
              className="edit_activity__input"
              id="startdate"
              name="startdate"
              type="datetime-local"
              defaultValue={start}
              required
            />
          </label>
          <label htmlFor="enddate" className="edit_activity__label">
            <Typography>Einddatum</Typography>
            <input
              className="edit_activity__input"
              id="enddate"
              name="enddate"
              type="datetime-local"
              defaultValue={end}
              required
            />
          </label>
        </div>
        <div className="edit_activity__row__long">
          <label htmlFor="description" className="edit_activity__label">
            <Typography>Beschrijving</Typography>
            <textarea
              className="edit_activity__input__wide"
              id="description"
              name="description"
              required
              defaultValue={description}
            />
          </label>
        </div>
        <div className="edit_activity__button">
          <Button label="Edit" variant="primary" />
        </div>
      </form>
    </div>
  );
};

const edit_activity = async (event: any, uid: string, session: any) => {
  event.preventDefault();
  const data = {
    name: event.target.elements.name.value,
    startdate: event.target.elements.startdate.value.split('T')[0],
    starttime: event.target.elements.startdate.value.split('T')[1] + ':00.000',
    enddate: event.target.elements.enddate.value.split('T')[0],
    endtime: event.target.elements.enddate.value.split('T')[1] + ':00.000',
    description: event.target.elements.description.value,
    id: uid,
    jwt: session.jwt,
  };
  const JSONdata = JSON.stringify(data);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  };
  const response = await fetch('/api/editactivity', options);
  const result = await response.json();
  if (response.status !== 200) {
    console.log('Unsuccesfull ' + response.status + '\nError message: ' + result.data);
    return;
  }
  location.reload();
};

export default EditActivity;
