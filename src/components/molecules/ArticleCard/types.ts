export type ArticleCard = {
  title: string;
  description: string;
  updatedAt: string;
  slug: string;
  locked?: boolean;
} & React.HTMLAttributes<HTMLElement>;
