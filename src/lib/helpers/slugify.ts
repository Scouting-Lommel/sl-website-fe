/**
 * Converts a given string into a URL-friendly slug.
 *
 * The function performs the following transformations:
 * - Normalizes unicode characters using NFKD normalization.
 * - Converts the string to lowercase.
 * - Trims leading and trailing whitespace.
 * - Replaces spaces with hyphens (`-`).
 * - Removes all non-word characters except hyphens.
 * - Replaces multiple consecutive hyphens with a single hyphen.
 * - Removes leading and trailing hyphens.
 *
 * @param str - The input string to be slugified.
 * @returns {string} The slugified version of the input string.
 */
const slugify = (str: string): string => {
  return str
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Converts a slugified string back to a normal string by replacing hyphens with spaces.
 *
 * @param str - The slugified string to be converted.
 * @returns The desluggified string with hyphens replaced by spaces.
 */
const desluggify = (str: string): string => {
  return str.replace(/-/g, ' ');
};

export { slugify, desluggify };
