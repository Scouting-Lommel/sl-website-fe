const formatFileSize = (kilobytes: number) => {
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
