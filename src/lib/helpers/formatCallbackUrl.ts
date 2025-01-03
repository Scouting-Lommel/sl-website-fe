/**
 * Formats the given callback URL by replacing all forward slashes ('/') with '%2F'.
 *
 * @param {string} callbackUrl - The URL to be formatted.
 * @returns {string} - The formatted URL with forward slashes replaced by '%2F'.
 */
export const formatCallbackUrl = (callbackUrl: string) => {
  return callbackUrl.replace(/\//g, '%2F');
};
