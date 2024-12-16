'use client';

import { Fragment, useState } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Forms/Input';
import Icon from '@/components/atoms/Icon';
import ManualCard from '@/components/molecules/ManualCard';
import { ManualCards as ManualCardsProps } from './types';
import styles from './ManualCards.css';
import IconButton from '@/components/atoms/IconButton';
import { useTranslations } from 'next-intl';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const ManualCards = ({ manualCards }: ManualCardsProps): JSX.Element => {
  const [searchString, setSearchString] = useState('');

  const t = useTranslations('common.search');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const filteredManuals = manualCards?.filter(
    (manual) =>
      manual.title.toLowerCase().includes(searchString.toLowerCase()) ||
      manual.description.toLowerCase().includes(searchString.toLowerCase()),
  );

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
