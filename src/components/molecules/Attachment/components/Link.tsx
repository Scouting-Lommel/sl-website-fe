'use client';

import { useContext, useEffect, useState } from 'react';
import { FormContext } from '@/lib/contexts/FormContext';
import { FormStatus } from '@/lib/constants/enums/formStatus';
import Icon from '@/components/atoms/Icon';
import Loader from '@/components/atoms/Loader';
import Typography from '@/components/atoms/Typography';
import { Link as LinkProps } from '../types';
import styles from '../Attachment.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = LinkProps & React.HTMLAttributes<HTMLElement>;

const Link = ({ id, label, link, groupId, allLinks, modDeleteable, deleteCallback }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setFormStatus, setRemoveStatusAfterTimeout } = useContext(FormContext);

  useEffect(() => {
    setRemoveStatusAfterTimeout(true);
  }, [setRemoveStatusAfterTimeout]);

  const handleDeleteFile = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!groupId || !allLinks || allLinks.length < 1) return;

    if (confirm(`Weet je zeker dat je de link "${label}" wil verwijderen?`)) {
      try {
        setLoading(true);
        setFormStatus(FormStatus.STATUS_LOADING);
        await callApi({ id: groupId, links: allLinks.filter((link) => link.id !== id) });
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
      body: JSON.stringify({ data }),
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
          <Icon name="link" aria-label={link} size="xl" className="attachment__icon" />
          <div className="attachment__info">
            <Typography className="attachment__info__name">{label}</Typography>
            <Typography className="attachment__info__filesize">{link}</Typography>
          </div>
          <span className="attachment__download-button">
            <Icon name="external-link" aria-label={link} size="sm" />
          </span>
          {modDeleteable && !loading && (
            <button
              className="attachment__delete-button"
              aria-label="Bestand verwijderen"
              type="button"
              onClick={handleDeleteFile}
            >
              <Icon name="trash" aria-label="Bestand verwijderen" size="sm" />
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
