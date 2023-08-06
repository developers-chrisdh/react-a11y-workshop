/**
 * Formats number to use a comma for decimals.
 * @param {number} number
 * @returns {string}
 */
export const formatNumber = (number) => {
  return String(number).replace('.', ',');
};
