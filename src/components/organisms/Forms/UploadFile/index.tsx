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
    try {
      await uploadFile(data.file);
      setFormStatus(FormStatus.STATUS_SUCCESS);
      props.callback();
      props.closeClickHandler();
      setFormStatus(FormStatus.STATUS_READY);
    } catch (err: any) {
      console.error(err);
      setFormStatus(FormStatus.STATUS_ERROR);
    }
  };

  const uploadFile = async (data: any) => {
    const formData = new FormData();
    formData.append('files', data);

    const allFiles = props.allFiles?.map((file: any) => String(file.id)) || [];

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/api/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_UPLOAD_FILE_TOKEN}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (result[0].id) {
        allFiles.push(String(result[0].id));
      }

      await callApi({ id: props.groupId, files: allFiles });

      setFormStatus(FormStatus.STATUS_SUCCESS);
      props.callback();
      props.closeClickHandler();
      setFormStatus(FormStatus.STATUS_READY);
    } catch (err: any) {
      throw new Error('Failed to perform action:', err);
    }
  };

  const callApi = async (data: any) => {
    const response = await fetch('/api/file', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'create', data }),
    });

    if (!response.ok) {
      throw new Error('Failed to perform action');
    }

    return response.json();
  };

  return (
    <>
      {formStatus === FormStatus.STATUS_LOADING && (
        <Banner variant="info">Bestand uploaden...</Banner>
      )}
      {formStatus === FormStatus.STATUS_ERROR && (
        <Banner variant="error">
          Er ging iets mis bij het uploaden van dit bestand. Probeer het later opnieuw.
        </Banner>
      )}
      {formStatus === FormStatus.STATUS_SUCCESS && (
        <>
          <Banner variant="success">Bestand succesvol geupload.</Banner>
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
