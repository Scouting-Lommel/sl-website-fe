'use client';

import { useState, useContext, useEffect } from 'react';
import { Lightbox } from 'react-modal-image';
import cx from 'classnames';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { formatFileSize } from '@/lib/helpers/formatFileSize';
import {
  IconTextFile,
  IconPresentationFile,
  IconImageFile,
  IconFile,
  IconClose,
  IconDownload,
} from '@/assets/icons';
import Loader from '@/components/atoms/Loader';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { File as FileProps, Extensions } from '../types';
import styles from '../Attachment.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = FileProps & React.HTMLAttributes<HTMLElement>;

const extMap: Extensions = {
  pdf: IconTextFile,
  doc: IconTextFile,
  docx: IconTextFile,
  ppt: IconPresentationFile,
  pptx: IconPresentationFile,
  jpg: IconImageFile,
  jpeg: IconImageFile,
  png: IconImageFile,
  gif: IconImageFile,
};

const File = ({ id, ext, url, name, size, modDeleteable, deleteCallback }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [lightboxActive, setLightboxActive] = useState<boolean>(false);
  const { setFormStatus, setRemoveStatusAfterTimeout } = useContext(FormContext);

  const imageExt = ['.png', '.jpg', '.jpeg', '.gif'];
  const isImage = imageExt.includes(ext);

  useEffect(() => {
    setRemoveStatusAfterTimeout(true);
  }, [setRemoveStatusAfterTimeout]);

  const handleDeleteFile = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (confirm(`Weet je zeker dat je het bestand "${name}" wil verwijderen?`)) {
      try {
        setLoading(true);
        setFormStatus(FormStatus.STATUS_LOADING);
        await callApi(id);
        deleteCallback();
        setFormStatus(FormStatus.STATUS_DELETE_SUCCESS);
      } catch (err: any) {
        console.error(err);
        setFormStatus(FormStatus.STATUS_DELETE_ERROR);
      }
    }

    setLoading(false);
  };

  const callApi = async (data: any) => {
    const response = await fetch('/api/file', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'delete', data }),
    });

    if (!response.ok) {
      throw new Error('Failed to perform action');
    }

    return response.json();
  };

  const icon = extMap[ext.slice(1)] ? extMap[ext.slice(1)] : IconFile;

  return (
    <>
      <li
        className={cx('attachment', isImage && 'attachment--clickable')}
        role="button"
        onClick={() => setLightboxActive(!lightboxActive)}
      >
        <Icon size="xl" icon={icon} title={ext.slice(1)} className="attachment__icon" />
        <div className="attachment__info">
          <Typography className="attachment__info__name">{name.replaceAll(ext, '')}</Typography>
          <Typography className="attachment__info__filesize">{formatFileSize(size)}</Typography>
        </div>
        <a
          className="attachment__download-button"
          aria-label="Bestand dowloaden"
          type="button"
          href={url}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <Icon size="sm" icon={IconDownload} title="Bestand downloaden" />
        </a>
        {modDeleteable && !loading && (
          <button
            className="attachment__delete-button"
            aria-label="Bestand verwijderen"
            type="button"
            onClick={handleDeleteFile}
          >
            <Icon size="sm" icon={IconClose} title="Bestand verwijderen" />
          </button>
        )}
        {modDeleteable && loading && (
          <div className="attachment__loader">
            <Loader size="xs" />
          </div>
        )}
      </li>

      {isImage && lightboxActive && (
        <Lightbox
          small={url}
          medium={url}
          large={url}
          alt={name}
          onClose={() => setLightboxActive(false)}
        />
      )}
    </>
  );
};

export default File;
