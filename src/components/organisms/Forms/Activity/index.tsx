import { useContext } from 'react';
import { updateActivity } from '@/lib/api/activities/api';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import Banner from '@/components/atoms/Banner';
import { FormField } from '@/components/organisms/Forms/FormBuilder/FormField/types';
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

  const submitForm = async (data: any, formFields: FormField[]) => {
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
    } catch (err: any) {
      console.error(err);
      console.log(err.message);
      setFormStatus(FormStatus.STATUS_ERROR);
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

      {formStatus !== FormStatus.STATUS_SUCCESS && (
        <ActivityForm
          activityId={props.activity.id}
          initialValues={initialValues}
          submitForm={submitForm}
        />
      )}
    </>
  );
};

export default Activity;
