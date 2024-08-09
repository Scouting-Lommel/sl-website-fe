import { useContext } from 'react';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import Banner from '@/components/atoms/Banner';

const FileStatus = ({}) => {
  const { formStatus } = useContext(FormContext);

  return (
    <>
      {formStatus === FormStatus.STATUS_LOADING && <Banner variant="info">Aan het laden...</Banner>}
      {formStatus === FormStatus.STATUS_ERROR && (
        <Banner variant="error">
          Er ging iets mis bij het toevoegen van dit bestand. Probeer het later opnieuw.
        </Banner>
      )}
      {formStatus === FormStatus.STATUS_DELETE_ERROR && (
        <Banner variant="error">
          Er ging iets mis bij het verwijderen van dit bestand. Probeer het later opnieuw.
        </Banner>
      )}
      {formStatus === FormStatus.STATUS_SUCCESS && (
        <>
          <Banner variant="success">Het bestand is met succes geupload</Banner>
        </>
      )}
      {formStatus === FormStatus.STATUS_DELETE_SUCCESS && (
        <>
          <Banner variant="success">Het bestand is met succes verwijderd</Banner>
        </>
      )}
    </>
  );
};

export default FileStatus;
