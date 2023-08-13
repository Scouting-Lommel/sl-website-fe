export type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  resourceId: number;
};

export type CalendarProps = {
  events: CalendarEvent[];
};
