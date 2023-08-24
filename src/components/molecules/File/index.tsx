'use client';

import classNames from 'classnames';
import { File as FileBlockProps, extensions } from './types';
import styles from './File.css';
import Icon from '@/components/atoms/Icon';
import {
  IconPdf,
  IconWord,
  IconPowerpoint,
  IconUnknown_file,
  IconJpg,
  IconPng,
} from '@/assets/icons';
import Typography from '@/components/atoms/Typography';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FileBlockProps & React.HTMLAttributes<HTMLElement>;

const extMap: extensions = {
  pdf: IconPdf,
  docx: IconWord,
  ppt: IconPowerpoint,
  pptx: IconPowerpoint,
  jpg: IconJpg,
  jpeg: IconJpg,
  png: IconPng,
};

const File = ({ ext, url, name, size, final }: Props) => {
  const download = () => {
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop()!;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const icon = extMap[ext.slice(1)] ? extMap[ext.slice(1)] : IconUnknown_file;

  return (
    <div
      className={classNames('fileContainer', final && 'fileContainer__final')}
      onClick={download}
    >
      <Icon size="custom" icon={icon} title="Chevron" />
      <Typography className="file__name" modPreWrap>
        {name.replaceAll(ext, '')}
      </Typography>
      <Typography className="file__filesize" modPreWrap>
        {size}KB
      </Typography>
    </div>
  );
};

export default File;
