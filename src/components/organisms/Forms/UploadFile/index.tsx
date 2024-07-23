import { useContext } from 'react';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import Banner from '@/components/atoms/Banner';
import UploadFileForm from './UploadFileForm';

const Activity = (props: any) => {
  const { formStatus, setFormStatus } = useContext(FormContext);

  const initialValues = {
    groupId: props.groupId,
  };

  const handleSubmitForm = async (data: any) => {
    console.log(data);
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
      {formStatus === FormStatus.STATUS_SUCCESS && (
        <>
          <Banner variant="success">Activiteit succesvol opgeslagen</Banner>
        </>
      )}

      {formStatus !== FormStatus.STATUS_SUCCESS && (
        <UploadFileForm
          initialValues={initialValues}
          submitForm={handleSubmitForm}
          groupId={props.groupId}
        />
      )}
    </>
  );
};

export default Activity;
