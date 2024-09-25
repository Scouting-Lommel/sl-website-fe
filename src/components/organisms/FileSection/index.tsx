import Typography from '@/components/atoms/Typography';
import Attachment from '@/components/molecules/Attachment';
import { FileSection as FileBlockProps } from './types';
import styles from './FileSection.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FileBlockProps & React.HTMLAttributes<HTMLElement>;

const FileSection = ({ title, files, links, className }: Props) => {
  return (
    <div className={className}>
      <h2 className="file-section t-headline-2 t-align-center">{title}</h2>
      {files && files.data.length > 0 && (
        <ul className="file-section__attachments">
          {files?.data.map((file, i) => {
            return <Attachment variant="file" key={i} file={file.attributes} />;
          })}
          {links?.map((link, i) => {
            return <Attachment variant="link" key={i} link={link} allLinks={links} />;
          })}
        </ul>
      )}
      {files?.data.length === 0 && (
        <div className="file-section__no-files">
          <Typography className="file-section__no-files__text">Geen bestanden gevonden.</Typography>
        </div>
      )}
    </div>
  );
};

export default FileSection;
