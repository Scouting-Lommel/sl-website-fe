import { useTranslations } from 'next-intl';
import { useContext } from 'react';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { FormContext } from '@/lib/contexts/FormContext';
import Banner from '@/components/atoms/Banner';
import UploadLinkForm from './UploadLinkForm';

const UploadLink = (props: any) => {
  const t = useTranslations('forms.uploadLinkForm');

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
      {formStatus === FormStatus.STATUS_LOADING && (
        <Banner variant="info">{t('formStatus.loading')}</Banner>
      )}
      {formStatus === FormStatus.STATUS_ERROR && (
        <Banner variant="error">{t('formStatus.error')}</Banner>
      )}
      {formStatus === FormStatus.STATUS_SUCCESS && (
        <>
          <Banner variant="success">{t('formStatus.success')}</Banner>
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
