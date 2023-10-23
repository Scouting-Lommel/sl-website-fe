export type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
};

export type CalendarProps = {
  events: CalendarEvent[];
};
