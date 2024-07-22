'use client';

import { Fragment, useCallback, useEffect, useState } from 'react';
import BlockContainer from '@/components/atoms/BlockContainer';
import Loader from '@/components/atoms/Loader';
import SectionTitle from './SectionTitle';
import { getFiles } from '../api';
import File from '@/components/molecules/File';

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

    setFiles(data?.groups?.data[0]?.attributes?.files?.data?.map((file: any) => file.attributes));
    setLoading(false);
  }, [group]);

  useEffect(() => {
    if (group) {
      fetchFiles();
    }
  }, [group, fetchFiles]);

  return (
    <BlockContainer slug="group-files-section">
      <SectionTitle title="Bestanden" groupId={group.id} type="file" />
      <BlockContainer slug="group-files" modSmallPadding>
        {error && !loading && <p>Er ging iets mis. Probeer het later nog eens.</p>}
        {!error && loading && <Loader size="sm" modLabelVisible />}
        {!error && !loading && groupFiles?.length === 0 && <p>Geen bestanden gevonden.</p>}
        {!error &&
          !loading &&
          groupFiles?.length > 0 &&
          groupFiles?.map((file: any, key: any) => (
            <Fragment key={`activity-${key}`}>
              <File {...file} />
            </Fragment>
          ))}
      </BlockContainer>
    </BlockContainer>
  );
};

export default FilesSection;

// TODO: Editable (deleteable) files, file component styling + states, add new file, mutation query
