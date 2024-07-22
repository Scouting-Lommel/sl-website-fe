import { useContext } from 'react';
import { updateActivity, deleteActivity, createActivity } from '@/lib/api/activities/api';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import Banner from '@/components/atoms/Banner';
import ActivityForm from './ActivityForm';

const Activity = (props: any) => {
  const { formStatus, setFormStatus } = useContext(FormContext);
  let initialValues = {};

  if (props.activity) {
    initialValues = {
      title: props.activity.title,
      start: `${props.activity.startDate}T${props.activity.startTime}`,
      end: `${props.activity.endDate}T${props.activity.endTime}`,
      description: props.activity.description,
    };
  }

  if (props.groupId) {
    const start = new Date();
    const end = new Date();
    start.setHours(14, 0);
    end.setHours(16, 30);

    initialValues = {
      title: '',
      start: `${start.getFullYear()}-${String(start.getMonth() + 1).padStart(2, '0')}-${String(
        start.getDate(),
      ).padStart(2, '0')}T${String(start.getHours()).padStart(2, '0')}:${String(
        start.getMinutes(),
      ).padStart(2, '0')}`,
      end: `${end.getFullYear()}-${String(end.getMonth() + 1).padStart(2, '0')}-${String(
        end.getDate(),
      ).padStart(2, '0')}T${String(end.getHours()).padStart(2, '0')}:${String(
        end.getMinutes(),
      ).padStart(2, '0')}`,
      description: '',
    };
  }

  const handleSubmitForm = async (data: any) => {
    if (props.activity) {
      let activity = {
        id: data['activity-id'],
        title: data.title,
        description: data.description,
        startDate: data.start.split('T')[0],
        startTime: `${data.start.split('T')[1]}:00.000`,
        endDate: data.end.split('T')[0],
        endTime: `${data.end.split('T')[1]}:00.000`,
      };

      try {
        await updateActivity({ ...activity });
        setFormStatus(FormStatus.STATUS_SUCCESS);
        props.callback();
      } catch (err: any) {
        console.error(err);
        setFormStatus(FormStatus.STATUS_ERROR);
      }
    }

    if (props.groupId) {
      let activity = {
        title: data.title,
        description: data.description,
        startDate: data.start.split('T')[0],
        startTime: `${data.start.split('T')[1]}:00.000`,
        endDate: data.end.split('T')[0],
        endTime: `${data.end.split('T')[1]}:00.000`,
        groupId: props.groupId,
      };

      try {
        await createActivity({ ...activity });
        setFormStatus(FormStatus.STATUS_SUCCESS);
        props.callback();
        props.handleCloseModal();
      } catch (err: any) {
        console.error(err);
        setFormStatus(FormStatus.STATUS_ERROR);
      }
    }
  };

  const handleDeleteActivity = async () => {
    if (
      confirm(
        `Weet je zeker dat je de activiteit met titel "${props.activity.title}" wil verwijderen?`,
      )
    ) {
      try {
        await deleteActivity(props.activity.id);
        setFormStatus(FormStatus.STATUS_DELETE_SUCCESS);
        props.callback();
      } catch (err: any) {
        console.error(err);
        setFormStatus(FormStatus.STATUS_DELETE_ERROR);
      }
    }
  };

  return (
    <>
      {formStatus === FormStatus.STATUS_LOADING && (
        <Banner variant="info">Activiteit opslaan...</Banner>
      )}
      {formStatus === FormStatus.STATUS_ERROR && (
        <Banner variant="error">
          Er ging iets mis bij het opslaan van deze activiteit. Probeer het later opnieuw.
        </Banner>
      )}
      {formStatus === FormStatus.STATUS_DELETE_ERROR && (
        <Banner variant="error">
          Er ging iets mis bij het verwijderen van deze activiteit. Probeer het later opnieuw.
        </Banner>
      )}
      {(formStatus === FormStatus.STATUS_CAPTCHA_NOT_VERIFIED ||
        formStatus === FormStatus.STATUS_CAPTCHA_ERROR) && (
        <Banner variant="error">
          Er ging iets mis met de Captcha check. Probeer het later opnieuw.
        </Banner>
      )}
      {formStatus === FormStatus.STATUS_SUCCESS && (
        <>
          <Banner variant="success">Activiteit succesvol opgeslagen</Banner>
        </>
      )}
      {formStatus === FormStatus.STATUS_DELETE_SUCCESS && (
        <>
          <Banner variant="success">Activiteit succesvol verwijderd</Banner>
        </>
      )}

      {formStatus !== FormStatus.STATUS_SUCCESS && (
        <ActivityForm
          activityId={props.activity?.id}
          initialValues={initialValues}
          submitForm={handleSubmitForm}
          deleteActivity={handleDeleteActivity}
        />
      )}
    </>
  );
};

export default Activity;
