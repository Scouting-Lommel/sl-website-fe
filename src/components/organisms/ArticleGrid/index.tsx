'use client';

import { useTranslations } from 'next-intl';
import { Fragment, useState } from 'react';
import { StylesheetLink } from '@/types/StyleSheetLink';
import Input from '@/components/atoms/Forms/Input';
import IconButton from '@/components/atoms/IconButton';
import ArticleCard from '@/components/molecules/ArticleCard';
import { ArticleGrid as ArticleGridProps } from './types';
import styles from './ArticleGrid.css';

export const links = (): StylesheetLink[] => {
  return [{ rel: 'stylesheet', href: styles }];
};

const ArticleGrid = ({ articles }: ArticleGridProps): JSX.Element => {
  const [searchString, setSearchString] = useState('');

  const t = useTranslations('common.search');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const filteredArticles = articles
    ?.filter(
      (article) =>
        article.title.toLowerCase().includes(searchString.toLowerCase()) ||
        article.description.toLowerCase().includes(searchString.toLowerCase()),
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
    <div className="article-grid sl-layout">
      <div className="article-grid__search">
        <Input
          label={t('label')}
          id="article-search"
          name="article-search"
          value={searchString}
          placeholder={t('placeholder')}
          customChangeBehaviour={handleSearch}
          modShowLabel={false}
        />
        <IconButton icon="x" label={t('remove')} onClick={handleClearSearch} />
      </div>

      <hr />

      {filteredArticles &&
        Boolean(filteredArticles.length) &&
        filteredArticles.map((article, i) => (
          <Fragment key={article.id}>
            <ArticleCard {...article} />
            {i < articles.length - 1 && <hr />}
          </Fragment>
        ))}
      {(!filteredArticles || !Boolean(filteredArticles.length)) && <p>{t('noResults')}</p>}
    </div>
  );
};

export default ArticleGrid;
