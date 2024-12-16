'use client';

import { useTranslations } from 'next-intl';
import { Fragment, useState } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Forms/Input';
import Icon from '@/components/atoms/Icon';
import IconButton from '@/components/atoms/IconButton';
import ManualCard from '@/components/molecules/ManualCard';
import { ManualCards as ManualCardsProps } from './types';
import styles from './ManualCards.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const ManualCards = ({ manualCards }: ManualCardsProps): JSX.Element => {
  const [searchString, setSearchString] = useState('');

  const t = useTranslations('common.search');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const filteredManuals = manualCards
    ?.filter(
      (manual) =>
        manual.title.toLowerCase().includes(searchString.toLowerCase()) ||
        manual.description.toLowerCase().includes(searchString.toLowerCase()),
    )
    .sort((a, b) => {
      if (a.locked === b.locked) {
        return a.title.localeCompare(b.title);
      }
      return a.locked ? 1 : -1;
    });

  const handleClearSearch = () => {
    setSearchString('');
  };

  return (
    <div className="manual-cards sl-layout">
      <div className="manual-cards__search">
        <Input
          label={t('label')}
          id="manuals-search"
          name="manuals-search"
          value={searchString}
          placeholder={t('placeholder')}
          customChangeBehaviour={handleSearch}
          modShowLabel={false}
        />
        <IconButton icon="x" label={t('remove')} onClick={handleClearSearch} />
      </div>

      <hr />

      {filteredManuals &&
        Boolean(filteredManuals.length) &&
        filteredManuals.map((manualCard, i) => (
          <Fragment key={manualCard.id}>
            <ManualCard {...manualCard} />
            {i < manualCards.length - 1 && <hr />}
          </Fragment>
        ))}
      {(!filteredManuals || !Boolean(filteredManuals.length)) && <p>{t('noResults')}</p>}
    </div>
  );
};

export default ManualCards;
