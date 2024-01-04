import { CreateActivity as CreateActivityProps } from './types';
// @ts-ignore
import styles from './CreateActivity.css';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = CreateActivityProps & React.HTMLAttributes<HTMLElement>;

const CreateActivity = ({ tak, session }: Props) => {
  return (
    <div>
      <form
        onSubmit={(event) => create_activity(event, tak, session)}
        className="create_activity__form"
      >
        <h2 className="t-headline-2 t-align-center">Maak activiteit</h2>
        <div className="create_activity__row__long">
          <label htmlFor="name" className="create_activity__label">
            <Typography>Naam</Typography>
            <input className="create_activity__input" id="name" name="name" type="text" required />
          </label>
        </div>
        <div className="create_activity__row">
          <label htmlFor="startdate" className="create_activity__label">
            <Typography>Startdatum</Typography>
            <input
              className="create_activity__input"
              id="startdate"
              name="startdate"
              type="datetime-local"
              required
            />
          </label>
          <label htmlFor="enddate" className="create_activity__label">
            <Typography>Einddatum</Typography>
            <input
              className="create_activity__input"
              id="enddate"
              name="enddate"
              type="datetime-local"
              required
            />
          </label>
        </div>
        <div className="create_activity__row__long">
          <label htmlFor="description" className="create_activity__label">
            <Typography>Beschrijving</Typography>
            <textarea
              className="create_activity__input__wide"
              id="description"
              name="description"
              required
            />
          </label>
        </div>
        <div className="create_activity__button">
          <Button label="Maak activiteit" variant="primary" />
        </div>
      </form>
    </div>
  );
};

const create_activity = async (event: any, tak: string, session: any) => {
  event.preventDefault();
  const data = {
    name: event.target.elements.name.value,
    startdate: event.target.elements.startdate.value.split('T')[0],
    starttime: event.target.elements.startdate.value.split('T')[1] + ':00.000',
    enddate: event.target.elements.enddate.value.split('T')[0],
    endtime: event.target.elements.enddate.value.split('T')[1] + ':00.000',
    description: event.target.elements.description.value,
    group: parseInt(tak),
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
  const response = await fetch('/api/createactivity', options);
  const result = await response.json();
  if (response.status !== 200) {
    console.log('Unsuccesfull' + response.status + '\n Error message: ' + result.data);
    return;
  }
  location.reload();
};

export default CreateActivity;
