'use client';

import cn from 'classnames';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { formatDateTime } from '@/lib/helpers/dateTime';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { ManualCard as ManualCardProps } from './types';
import styles from './ManualCard.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const ManualCard = ({
  title,
  description,
  updatedAt,
  locked,
  slug,
}: ManualCardProps): JSX.Element => {
  const t = useTranslations('common');

  const [isShaking, setIsShaking] = useState(false);
  const [lockedMessageVisible, setLockedMessageVisible] = useState(false);

  const { status } = useSession();

  const handleLockedClick = () => {
    setLockedMessageVisible(true);
    setTimeout(() => {
      setLockedMessageVisible(false);
    }, 10000);

    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 400);
  };

  if (locked && status !== 'authenticated') {
    return (
      <article className="manual-card">
        <div className="manual-card__link" onClick={handleLockedClick}>
          <h2 className="manual-card__title">{title}</h2>
          <p className="manual-card__last-changed">
            {t('lastChanged')}: {formatDateTime(updatedAt)}
          </p>

          <Typography tagName="p">{description}</Typography>

          <div
            className={cn(
              'manual-card__lock',
              isShaking && 'manual-card__lock--shaking',
              lockedMessageVisible && 'manual-card__lock--message-visible',
              !lockedMessageVisible && 'manual-card__lock--message-invisible',
            )}
          >
            <div className="manual-card__lock__message">
              {t.rich('needToBeLoggedIn', {
                link: (children) => <a href="/inloggen?callbackUrl=%2Fhandleidingen">{children}</a>,
              })}
            </div>
            <Icon name="lock" size="sm" className="manual-card__lock__icon" />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="manual-card">
      <a className="manual-card__link" href={`/handleidingen/${slug}`}>
        <h2 className="manual-card__title">{title}</h2>
        <p className="manual-card__last-changed">
          {t('lastChanged')}: {formatDateTime(updatedAt)}
        </p>

        <Typography tagName="p">{description}</Typography>
      </a>
    </article>
  );
};

export default ManualCard;
