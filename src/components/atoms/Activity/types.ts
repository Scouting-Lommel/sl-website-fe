export type Activity = {
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  description: string;
} & React.HTMLAttributes<HTMLElement>;

export type Day = {
  [key: number]: string;
};
