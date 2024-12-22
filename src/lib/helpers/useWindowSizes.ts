import { useWindowSize } from 'usehooks-ts';
import { windowSizes } from '@/lib/constants/windowSizes';

export const useWindowSizes = () => {
  const { width: windowWidth } = useWindowSize();

  return {
    isMobile: windowWidth <= windowSizes.mobile,
    isTablet: windowWidth <= windowSizes.tablet,
    isDesktop: windowWidth > windowSizes.tablet,
  };
};
