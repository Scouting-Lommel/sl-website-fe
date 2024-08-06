'use client';

import { Fragment, useCallback, useEffect, useState } from 'react';
import { FormProvider } from '@/lib/contexts/FormContext';
import BlockContainer from '@/components/atoms/BlockContainer';
import Loader from '@/components/atoms/Loader';
import File from '@/components/molecules/File';
import SectionTitle from './SectionTitle';
import FileStatus from './FileStatus';
import { getFiles } from '../api';

type Props = {
  group: any;
};

const FilesSection = ({ group }: Props) => {
  const [groupFiles, setFiles] = useState<any>(null);
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
          title="Bestanden"
          groupId={group.id}
          type="file"
          allFiles={groupFiles}
          callback={addFileCallback}
        />
        <BlockContainer slug="group-files" modSmallPadding>
          <FileStatus />
          {error && !loading && (
            <p>Er ging iets mis bij het laden van de bestanden. Probeer het later nog eens.</p>
          )}
          {!error && loading && <Loader size="sm" modLabelVisible />}
          {!error && !loading && groupFiles?.length === 0 && <p>Geen bestanden gevonden.</p>}
          {!error &&
            !loading &&
            groupFiles?.length > 0 &&
            groupFiles?.map((file: any, key: any) => (
              <Fragment key={`activity-${key}`}>
                <File {...file} deleteCallback={() => fetchFiles()} modDeleteable />
              </Fragment>
            ))}
        </BlockContainer>
      </FormProvider>
    </BlockContainer>
  );
};

export default FilesSection;
