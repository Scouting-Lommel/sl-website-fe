'use client';

import { usePathname } from 'next/navigation';
import { getBreadcrumbs } from '@/lib/helpers/getBreadcrumbs';
import { AutoBreadcrumbs as AutoBreadcrumbsProps } from './types';
import Breadcrumbs from './Breadcrumbs';

const AutoBreadcrumbs = ({ is404 }: AutoBreadcrumbsProps): JSX.Element => {
  const path = usePathname();

  const items = is404 ? getBreadcrumbs('/404') : getBreadcrumbs(path);

  if (path === '/') return <></>;

  return <Breadcrumbs items={items} />;
};

export default AutoBreadcrumbs;
