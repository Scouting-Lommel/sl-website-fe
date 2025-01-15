/**
 ** Mapped icon names that are being used on the Scouting Lommel website
 */
export const iconMap = {
  'arrow-left': 'ArrowLeft',
  'arrow-right': 'ArrowRight',
  'arrow-down': 'ArrowDown',
  'arrow-up': 'ArrowUp',
  'chevron-left': 'ChevronLeft',
  'chevron-right': 'ChevronRight',
  'chevron-down': 'ChevronDown',
  'chevron-up': 'ChevronUp',
  'loader-spinner': 'LoaderCircle',
  close: 'X',
  document: 'FileText',
  house: 'House',
  image: 'Image',
  presentation: 'FileChartColumnIncreasing',
  file: 'File',
  download: 'Download',
  trash: 'Trash2',
  link: 'Link',
  menu: 'Menu',
  'external-link': 'ExternalLink',
  facebook: 'Facebook',
  instagram: 'Instagram',
  tiktok: 'Music2',
  lock: 'Lock',
  x: 'X',
  refresh: 'RefreshCw',
} as const;

export type IconNames = keyof typeof iconMap;
