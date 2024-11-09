/**
 * Generates a Cloudinary image URL based on the provided hash.
 *
 * @param {string} hash - The unique identifier for the image.
 * @returns {string} The full URL to the image in webp format.
 */
export const generateImageUrl = (hash: string) => {
  return `https://res.cloudinary.com/scoutinglommel/${hash}.webp`;
};
