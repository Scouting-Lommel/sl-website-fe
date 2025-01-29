/**
 * Formats a given date into a specified string format.
 *
 * @param date - The date to format, either as a Date object or a string.
 * @param format - The desired format for the output date string.
 *                 Supported formats are 'YYYY-MM-DD' and 'DD/MM/YYYY'.
 *                 Defaults to 'YYYY-MM-DD'.
 * @returns The formatted date string.
 */
export function formatDate(
  date: Date | string,
  format: 'YYYY-MM-DD' | 'DD/MM/YYYY' = 'YYYY-MM-DD',
): string {
  const dateTime = new Date(typeof date === 'string' ? date.toString() : date);
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const day = String(dateTime.getDate()).padStart(2, '0');

  switch (format) {
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    case 'YYYY-MM-DD':
    default:
      return `${year}-${month}-${day}`;
  }
}

/**
 * Formats a given date or date string into a time string in the format "HH:mm".
 *
 * @param date - The date or date string to format.
 * @returns The formatted time string in "HH:mm" format.
 */
export function formatTime(date: Date | string): string {
  const dateTime = new Date(typeof date === 'string' ? date.toString() : date);
  const hours = String(dateTime.getHours()).padStart(2, '0');
  const minutes = String(dateTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

/**
 * Formats a given Strapi time string by extracting the first 5 characters.
 *
 * @param time - The time string to be formatted.
 * @returns The formatted time string.
 */
export function formatStrapiTime(time: string): string {
  return time?.slice(0, 5);
}

/**
 * Formats a given date or date string into a datetime string in the format "YYYY-MM-DD HH:mm".
 *
 * @param date - The date or date string to format.
 * @returns The formatted datetime string in "YYYY-MM-DD HH:mm" format.
 */
export function formatDateTime(date: Date | string): string {
  const dateTime = new Date(typeof date === 'string' ? date.toString() : date);

  const formattedDate = formatDate(dateTime);
  const formattedTime = formatTime(dateTime);
  return `${formattedDate} ${formattedTime}`;
}
