'use client';

import { Fragment, useCallback, useEffect, useState } from 'react';
import { FormProvider } from '@/lib/contexts/FormContext';
import BlockContainer from '@/components/atoms/BlockContainer';
import Loader from '@/components/atoms/Loader';
import Attachment from '@/components/molecules/Attachment';
import SectionTitle from './SectionTitle';
import FileStatus from './FileStatus';
import { getFiles } from '../api';

type Props = {
  group: any;
};

const FilesSection = ({ group }: Props) => {
  const [groupFiles, setFiles] = useState<any>(null);
  const [groupLinks, setLinks] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

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
          title="Links en bestanden"
          groupId={group.id}
          type="file"
          allFiles={groupFiles}
          allLinks={groupLinks}
          callback={addFileCallback}
        />
        <BlockContainer slug="group-files" modSmallPadding>
          <FileStatus />
          {error && !loading && (
            <p>Er ging iets mis bij het laden van de bestanden. Probeer het later nog eens.</p>
          )}
          {!error && loading && <Loader size="sm" modLabelVisible />}
          {!error && !loading && groupFiles?.length === 0 && groupLinks === 0 && (
            <p>Geen bestanden gevonden.</p>
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
