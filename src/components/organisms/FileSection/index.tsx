import File from '@/components/molecules/File';
import { FileSection as FileBlockProps } from './types';
import Typography from '@/components/atoms/Typography';

type Props = FileBlockProps & React.HTMLAttributes<HTMLElement>;

const FileSection = ({ title, files, className }: Props) => {
  return (
    <div className={className}>
      <h2 className="t-headline-2 t-align-center">{title}</h2>
      {files.data.length > 0 &&
        files.data.map((file, i) => {
          return (
            <File
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
          <Typography className="filesection__nofiles__text">Geen bestanden</Typography>
        </div>
      )}
    </div>
  );
};

export default FileSection;
