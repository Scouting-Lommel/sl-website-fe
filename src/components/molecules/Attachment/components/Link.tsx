'use client';

import { useContext, useEffect, useState } from 'react';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import { IconClose, IconExternalLink, IconLink } from '@/assets/icons';
import Icon from '@/components/atoms/Icon';
import Loader from '@/components/atoms/Loader';
import Typography from '@/components/atoms/Typography';
import { Link as LinkProps } from '../types';
import styles from '../Attachment.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = LinkProps & React.HTMLAttributes<HTMLElement>;

const Link = ({ id, label, link, allLinks, modDeleteable, deleteCallback }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setFormStatus, setRemoveStatusAfterTimeout } = useContext(FormContext);

  useEffect(() => {
    setRemoveStatusAfterTimeout(true);
  }, [setRemoveStatusAfterTimeout]);

  const handleDeleteFile = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (confirm(`Weet je zeker dat je de link "${label}" wil verwijderen?`)) {
      try {
        setLoading(true);
        setFormStatus(FormStatus.STATUS_LOADING);
        await callApi(allLinks.filter((link) => link.id !== id));
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
    const response = await fetch('/api/link-attachment', {
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

  return (
    <>
      <li className="attachment__container">
        <a
          className="attachment attachment--clickable"
          type="button"
          href={link}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <Icon size="xl" icon={IconLink} title={link} className="attachment__icon" />
          <div className="attachment__info">
            <Typography className="attachment__info__name">{label}</Typography>
            <Typography className="attachment__info__filesize">{link}</Typography>
          </div>
          <span className="attachment__download-button">
            <Icon size="sm" icon={IconExternalLink} title={link} />
          </span>
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
        </a>
      </li>
    </>
  );
};

export default Link;
