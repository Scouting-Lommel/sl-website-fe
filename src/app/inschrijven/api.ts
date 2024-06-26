import { generateApiQuery } from '@/lib/api';
import { GENERAL_DATA_FOR_REGISTER_PAGE, REGISTER_PAGE_QUERY } from './query';

export function getRegisterPage(): Promise<any> {
  return generateApiQuery({
    query: REGISTER_PAGE_QUERY,
  });
}

export function getGeneralDataForRegisterPage(): Promise<any> {
  return generateApiQuery({
    query: GENERAL_DATA_FOR_REGISTER_PAGE,
  });
}
