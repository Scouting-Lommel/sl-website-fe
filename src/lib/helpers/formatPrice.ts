/**
 * Formats a given amount as a price in Euros (EUR) according to the 'nl-BE' locale.
 *
 * @param {number | string} amount - The amount to be formatted. Can be a number or a string that represents a number.
 * @returns {string} The formatted price string in Euros.
 */
export const formatPrice = (amount: number | String): string => {
  return new Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency: 'EUR',
  }).format(Number(amount));
};
