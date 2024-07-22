'use client';

import { IconTextFile, IconPresentationFile, IconImageFile, IconFile } from '@/assets/icons';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { File as FileBlockProps, extensions } from './types';
import styles from './File.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FileBlockProps & React.HTMLAttributes<HTMLElement>;

const extMap: extensions = {
  pdf: IconTextFile,
  doc: IconTextFile,
  docx: IconTextFile,
  ppt: IconPresentationFile,
  pptx: IconPresentationFile,
  jpg: IconImageFile,
  jpeg: IconImageFile,
  png: IconImageFile,
};

const File = ({ ext, url, name, size }: Props) => {
  const download = () => {
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop()!;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const icon = extMap[ext.slice(1)] ? extMap[ext.slice(1)] : IconFile;

  return (
    <div className="file__container" onClick={download}>
      <Icon size="xl" icon={icon} title="Chevron" />
      <Typography className="file__name">{name.replaceAll(ext, '')}</Typography>
      <Typography className="file__filesize">{size}KB</Typography>
    </div>
  );
};

export default File;
