import { generateApiQuery } from '@/lib/api';
import { NAVIGATION_DATA, FOOTER_DATA, SEO_DATA } from './queries';

export const getNavigationData = (): Promise<any> => {
  return generateApiQuery({
    query: NAVIGATION_DATA,
  });
};

export const getFooterData = (): Promise<any> => {
  return generateApiQuery({
    query: FOOTER_DATA,
  });
};

export const getSeoData = (): Promise<any> => {
  return generateApiQuery({
    query: SEO_DATA,
  });
};

// Combined function for layout that gets all data at once but in parallel
export const getLayoutData = async (): Promise<any> => {
  const [navigationData, footerData] = await Promise.all([getNavigationData(), getFooterData()]);

  // Merge the data structure to match existing component props
  return {
    generalData: {
      data: {
        attributes: {
          ...navigationData.generalData.data.attributes,
          ...footerData.generalData.data.attributes,
        },
      },
    },
    groups: navigationData.groups,
    rentalLocations: navigationData.rentalLocations,
  };
};
