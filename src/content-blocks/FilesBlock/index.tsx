import BlockContainer from '@/components/atoms/BlockContainer';
import { FileBlock as FileBlockProps } from './types';
import FileSection from '@/components/organisms/FileSection';

type Props = FileBlockProps & React.HTMLAttributes<HTMLElement>;

const FilesBlock = ({ title, files, blockProperties }: Props) => {
  return (
    <BlockContainer
      variant={blockProperties?.variant}
      orientation={blockProperties?.orientation}
      slug={blockProperties?.slug}
      modMargin
    >
      <FileSection title={title} files={files} className="sl-layout" />
    </BlockContainer>
  );
};

export default FilesBlock;
