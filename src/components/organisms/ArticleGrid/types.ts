import { ArticleCard } from '@/components/molecules/ArticleCard/types';

export type ArticleGrid = {
  articles: ArticleCard[];
  modWithToolbar?: boolean;
  showMoreHref?: string;
} & React.HTMLAttributes<HTMLElement>;
