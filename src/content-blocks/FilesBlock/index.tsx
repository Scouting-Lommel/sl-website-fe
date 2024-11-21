import BlockContainer from '@/components/atoms/BlockContainer';
import FileSection from '@/components/organisms/FileSection';
import { FileBlock as FileBlockProps } from './types';

const FilesBlock = ({ title, files, links, blockProperties }: FileBlockProps): JSX.Element => {
  return (
    <BlockContainer
      variant={blockProperties?.variant}
      orientation={blockProperties?.orientation}
      slug={blockProperties?.slug}
      modMargin
    >
      <FileSection title={title} files={files} links={links} className="sl-layout" />
    </BlockContainer>
  );
};

export default FilesBlock;
