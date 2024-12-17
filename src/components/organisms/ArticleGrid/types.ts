import { ArticleCard } from '@/components/molecules/ArticleCard/types';

export type ArticleGrid = {
  articles: ArticleCard[];
} & React.HTMLAttributes<HTMLElement>;
