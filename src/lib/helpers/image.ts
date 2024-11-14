import { decode } from 'blurhash';

/**
 * Generates a Cloudinary image URL based on the provided hash.
 *
 * @param {string} hash - The unique identifier for the image.
 * @returns {string} The full URL to the image in webp format.
 */
export const generateImageUrl = (hash: string) => {
  return `https://res.cloudinary.com/scoutinglommel/${hash}.webp`;
};

/**
 * Generates a base64 encoded image from a blur hash.
 *
 * @param blurHash - The blur hash string to decode.
 * @param width - The width of the resulting image. Default is 240.
 * @param height - The height of the resulting image. Default is 180.
 * @returns A base64 encoded image string.
 */
export const generateBase64BlurHash = (
  blurHash: string,
  width: number = 240,
  height: number = 180,
) => {
  if (!blurHash) return '';

  const pixels = decode(blurHash, width, height);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    const imageData = ctx.createImageData(width, height);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
  }

  return canvas.toDataURL();
};
