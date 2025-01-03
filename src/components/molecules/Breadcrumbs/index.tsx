'use client';

import { usePathname } from 'next/navigation';
import { getBreadcrumbs } from '@/lib/helpers/getBreadcrumbs';
import Breadcrumbs from './Breadcrumbs';

const AutoBreadcrumbs = (): JSX.Element => {
  const path = usePathname();

  const items = getBreadcrumbs(path);

  if (path === '/') return <></>;

  return <Breadcrumbs items={items} />;
};

export default AutoBreadcrumbs;
