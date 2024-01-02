import { CreateActivity as CreateActivityProps } from './types';
import styles from './CreateActivity.css';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = CreateActivityProps & React.HTMLAttributes<HTMLElement>;

const CreateActivity = ({ tak }: Props) => {
  return (
    <div>
      <form onSubmit={create_activity} className="create_activity__form">
        <h2 className="t-headline-2 t-align-center">Maak activiteit</h2>
        <div className="create_activity__row">
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
        <div className="create_activity__row__wide">
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

const create_activity = async (event: any) => {
  event.preventDefault();
  const data = {
    name: event.target.elements.name.value,
    startdate: event.target.elements.startdate.value,
    enddate: event.target.elements.enddate.value,
    description: event.target.elements.description.value,
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
    console.log('Login unsuccesfull' + response.status + '\n Error message: ' + result.data);
    return;
  }
  location.reload();
};

export default CreateActivity;