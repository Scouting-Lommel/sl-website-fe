/**
 * Formats a given date into a string in the format 'YYYY-MM-DD'.
 *
 * @param date - The date to format. Can be a Date object or a string representing a date.
 * @returns A string representing the formatted date in 'YYYY-MM-DD' format.
 */
export function formatDate(date: Date | string): string {
  const dateTime = new Date(typeof date === 'string' ? date.toString() : date);
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const day = String(dateTime.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
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
