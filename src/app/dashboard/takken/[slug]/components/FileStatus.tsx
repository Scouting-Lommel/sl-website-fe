import { useContext } from 'react';
import { useTranslations } from 'next-intl';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import Banner from '@/components/atoms/Banner';

const FileStatus = () => {
  const { formStatus } = useContext(FormContext);

  const t = useTranslations('dashboard.groupsDetail.sections.fileStatus');

  switch (formStatus) {
    case FormStatus.STATUS_LOADING: {
      return <Banner variant="info">{t('loading')}</Banner>;
    }

    case FormStatus.STATUS_ERROR: {
      return <Banner variant="error">{t('error')}</Banner>;
    }

    case FormStatus.STATUS_DELETE_ERROR: {
      return <Banner variant="error">{t('deleteError')}</Banner>;
    }

    case FormStatus.STATUS_SUCCESS: {
      return <Banner variant="success">{t('success')}</Banner>;
    }

    case FormStatus.STATUS_DELETE_SUCCESS: {
      return <Banner variant="success">{t('deleteSuccess')}</Banner>;
    }

    default: {
      return <></>;
    }
  }
};

export default FileStatus;
