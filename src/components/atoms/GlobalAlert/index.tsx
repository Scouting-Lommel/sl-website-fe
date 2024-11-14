'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import cx from 'classnames';
import { slugify } from '@/lib/helpers/slugify';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';
import { GlobalAlert as GlobalAlertProps } from './types';
import styles from './GlobalAlert.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

type Props = GlobalAlertProps & React.HTMLAttributes<HTMLElement>;

const GlobalAlert = ({ label, variant = 'info' }: Props) => {
  const t = useTranslations('common');

  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  useEffect(() => {
    const storedValue = localStorage.getItem(slugify(label));
    if (storedValue === null) setAlertVisible(true);
    if (storedValue !== null) setAlertVisible(JSON.parse(storedValue));
  }, [variant, label]);

  const handleClose = () => {
    setAlertVisible(false);
    localStorage.setItem(slugify(label), 'false');
  };

  const globalAlertClassNames = cx('global-alert', `global-alert--${variant}`);

  return (
    <>
      {alertVisible && (
        <div className={globalAlertClassNames}>
          <div className="global-alert__inner sl-layout">
            <Typography data={label} />
            <Button variant="light" label={t('close')} onClick={handleClose} modSmall />
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalAlert;
