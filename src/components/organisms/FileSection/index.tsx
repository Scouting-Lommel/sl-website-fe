import File from '@/components/molecules/File';
import Typography from '@/components/atoms/Typography';
import { FileSection as FileBlockProps } from './types';
import styles from './FileSection.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FileBlockProps & React.HTMLAttributes<HTMLElement>;

const FileSection = ({ title, files, className }: Props) => {
  return (
    <div className={className}>
      <h2 className="filesection t-headline-2 t-align-center">{title}</h2>
      {files.data.length > 0 &&
        files.data.map((file, i) => {
          return (
            <File
              id={file.attributes.id}
              ext={file.attributes.ext}
              url={file.attributes.url}
              name={file.attributes.name}
              size={file.attributes.size}
              key={i}
            />
          );
        })}
      {files.data.length == 0 && (
        <div className="filesection__nofiles">
          <Typography className="filesection__nofiles__text">Geen bestanden gevonden.</Typography>
        </div>
      )}
    </div>
  );
};

export default FileSection;
