'use client';

import { useTranslations } from 'next-intl';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { FormProvider } from '@/lib/contexts/FormContext';
import Banner from '@/components/atoms/Banner';
import BlockContainer from '@/components/atoms/BlockContainer';
import Loader from '@/components/atoms/Loader';
import Attachment from '@/components/molecules/Attachment';
import FileStatus from './FileStatus';
import SectionTitle from './SectionTitle';
import { getFiles } from '../api';

type Props = {
  group: any;
};

const FilesSection = ({ group }: Props): JSX.Element => {
  const [groupFiles, setFiles] = useState<any>(null);
  const [groupLinks, setLinks] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const t = useTranslations('dashboard.groupsDetail.sections.filesSection');
  const tAlert = useTranslations('dashboard.groupsDetail');

  const fetchFiles = useCallback(async () => {
    setError(false);
    setLoading(true);

    const data = await getFiles(group.attributes.slug);

    if (!data) {
      setError(true);
      setLoading(false);
      return;
    }

    setFiles(
      data?.groups?.data[0]?.attributes?.files?.data?.map((file: any) => ({
        ...file.attributes,
        id: file.id,
      })),
    );

    setLinks(data?.groups?.data[0]?.attributes.links);

    setLoading(false);
  }, [group]);

  useEffect(() => {
    if (group) {
      fetchFiles();
    }
  }, [group, fetchFiles]);

  const addFileCallback = () => {
    fetchFiles();
  };

  return (
    <BlockContainer slug="group-files-section">
      <FormProvider>
        <SectionTitle
          title={t('title')}
          groupId={group.id}
          type="file"
          allFiles={groupFiles}
          allLinks={groupLinks}
          callback={addFileCallback}
        />

        <Banner variant="neutral">{tAlert('alert')}</Banner>

        <BlockContainer slug="group-files" modNoPadding>
          <FileStatus />
          {error && !loading && <p>{t('error')}</p>}
          {!error && loading && <Loader size="sm" modLabelVisible />}
          {!error && !loading && groupFiles?.length === 0 && groupLinks === 0 && (
            <p>{t('noFilesFound')}</p>
          )}
          {!error && !loading && (groupFiles?.length > 0 || groupLinks?.length > 0) && (
            <ul style={{ paddingLeft: 0 }}>
              {groupFiles?.length > 0 &&
                groupFiles?.map((file: any, key: any) => (
                  <Fragment key={`activity-${key}`}>
                    <Attachment
                      variant="file"
                      file={file}
                      deleteCallback={() => fetchFiles()}
                      modDeleteable
                    />
                  </Fragment>
                ))}
              {groupLinks?.length > 0 &&
                groupLinks?.map((link: any, key: any) => (
                  <Fragment key={`activity-${key}`}>
                    <Attachment
                      variant="link"
                      link={link}
                      groupId={group.id}
                      allLinks={groupLinks}
                      deleteCallback={() => fetchFiles()}
                      modDeleteable
                    />
                  </Fragment>
                ))}
            </ul>
          )}
        </BlockContainer>
      </FormProvider>
    </BlockContainer>
  );
};

export default FilesSection;
