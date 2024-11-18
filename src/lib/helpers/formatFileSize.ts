/**
 * Formats a file size given in kilobytes into a human-readable string.
 *
 * @param kilobytes - The file size in kilobytes.
 * @returns {string} A string representing the formatted file size in KB, MB, or GB.
 */
const formatFileSize = (kilobytes: number): string => {
  if (kilobytes === 0) return '0 KB';
  const k = 1024;
  const sizes = ['KB', 'MB', 'GB'];
  if (kilobytes < 512) {
    return `${kilobytes} KB`;
  }

  const megabytes = kilobytes / k;
  if (megabytes < 512) {
    return `${megabytes.toFixed(1)} MB`;
  }

  const i = Math.floor(Math.log(kilobytes) / Math.log(k));
  const size = parseFloat((kilobytes / Math.pow(k, i)).toFixed(2));
  return `${size} ${sizes[i]}`;
};

export { formatFileSize };
