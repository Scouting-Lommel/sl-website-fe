/**
 * Gets the current working year based on the current month.
 *
 * The working year is defined as a range of two years in the format "YYYY-YYYY".
 * If the current month is between July (7) and November (11) inclusive,
 * the working year spans from the current year to the next year.
 * Otherwise, the working year spans from the previous year to the current year.
 *
 * @returns {string} The current working year in the format "YYYY-YYYY".
 */
const getCurrentWorkingYear = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  if (currentMonth >= 7 && currentMonth <= 11) {
    return `${currentYear}-${currentYear + 1}`;
  }
  return `${currentYear - 1}-${currentYear}`;
};

export { getCurrentWorkingYear };
