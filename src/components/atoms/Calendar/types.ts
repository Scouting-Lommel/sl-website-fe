export type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
};

export type Calendar = {
  events: CalendarEvent[];
} & React.HTMLAttributes<HTMLElement>;
