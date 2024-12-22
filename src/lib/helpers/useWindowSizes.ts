import { useWindowSize } from 'usehooks-ts';
import { windowSizes } from '@/lib/constants/windowSizes';

/**
 * Custom hook that returns an object indicating the current window size category.
 *
 * @returns {Object} An object containing boolean values for different window size categories:
 * - `isMobile`: `true` if the window width is less than or equal to the mobile size threshold.
 * - `isTablet`: `true` if the window width is less than or equal to the tablet size threshold.
 * - `isDesktop`: `true` if the window width is greater than the tablet size threshold.
 */
export const useWindowSizes = () => {
  const { width: windowWidth } = useWindowSize();

  return {
    isMobile: windowWidth <= windowSizes.mobile,
    isTablet: windowWidth <= windowSizes.tablet,
    isDesktop: windowWidth > windowSizes.tablet,
  };
};
