import { useContext } from 'react';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import Banner from '@/components/atoms/Banner';
import UploadLinkForm from './UploadLinkForm';

const UploadLink = (props: any) => {
  const { formStatus, setFormStatus } = useContext(FormContext);

  const initialValues = {
    groupId: props.groupId,
  };

  const handleSubmitForm = async (data: any) => {
    try {
      await addLink(data);
      setFormStatus(FormStatus.STATUS_SUCCESS);
      props.callback();
      props.closeClickHandler();
      setFormStatus(FormStatus.STATUS_READY);
    } catch (err: any) {
      console.error(err);
      setFormStatus(FormStatus.STATUS_ERROR);
    }
  };

  const addLink = async (data: any) => {
    let groupLinks = [...props.allLinks];
    groupLinks = groupLinks.map((link) => ({ label: link.label, link: link.link }));
    groupLinks.push({ label: data.linkLabel, link: data.linkUrl });

    await callApi({ id: props.groupId, links: groupLinks });
  };

  const callApi = async (data: any) => {
    const response = await fetch('/api/link-attachment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      throw new Error('Failed to perform action');
    }

    return response.json();
  };

  return (
    <>
      {formStatus === FormStatus.STATUS_LOADING && <Banner variant="info">Link uploaden...</Banner>}
      {formStatus === FormStatus.STATUS_ERROR && (
        <Banner variant="error">
          Er ging iets mis bij het uploaden van deze link. Probeer het later opnieuw.
        </Banner>
      )}
      {formStatus === FormStatus.STATUS_SUCCESS && (
        <>
          <Banner variant="success">Link succesvol geupload.</Banner>
        </>
      )}

      {formStatus !== FormStatus.STATUS_SUCCESS && (
        <UploadLinkForm
          initialValues={initialValues}
          submitForm={handleSubmitForm}
          groupId={props.groupId}
        />
      )}
    </>
  );
};

export default UploadLink;

// TODO: Add upload file functionality
