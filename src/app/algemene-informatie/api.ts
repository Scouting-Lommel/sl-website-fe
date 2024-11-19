import { generateApiQuery } from '@/lib/api';
import { INFO_PAGE_QUERY, YEAR_THEME_QUERY } from './query';

export const getInfoPage = (): Promise<any> => {
  return generateApiQuery({
    query: INFO_PAGE_QUERY,
  });
};

export const getYearTheme = (): Promise<any> => {
  return generateApiQuery({
    query: YEAR_THEME_QUERY,
  });
};
