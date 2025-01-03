import { ArticleCard } from '@/components/molecules/ArticleCard/types';

export type ArticleGrid = {
  articles: ArticleCard[];
  modWithToolbar?: boolean;
  showMoreHref?: string;
  loginCallbackUrl: string;
} & React.HTMLAttributes<HTMLElement>;
