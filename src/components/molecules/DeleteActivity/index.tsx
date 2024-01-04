import { DeleteActivity as DeleteActivityProps } from './types';
import styles from './DeleteActivity.css';
import Button from '@/components/atoms/Button';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = DeleteActivityProps & React.HTMLAttributes<HTMLElement>;

const DeleteActivity = ({ uid, session }: Props) => {
  return (
    <div>
      <form onSubmit={(event) => delete_activity(event, uid, session)} className="delete_activity__form">
        <h2 className="t-headline-2 t-align-center">Verwijder activiteit?</h2>
        <div className="delete_activity__button">
          <Button label="Verwijder" variant="primary" />
        </div>
      </form>
    </div>
  );
};

const delete_activity = async (event: any, uid: string, session: any) => {
  event.preventDefault();
  const data = {
    id: uid,
    jwt: session?.jwt,
  };
  const JSONdata = JSON.stringify(data);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  };
  const response = await fetch('/api/deleteactivity', options);
  const result = await response.json();
  if (response.status !== 200) {
    console.log('Unsuccesfull ' + response.status + '\nError message: ' + result.data);
    return;
  }
  location.reload();
};

export default DeleteActivity;