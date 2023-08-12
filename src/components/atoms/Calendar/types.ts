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

export type CalendarResourceMap = {
  resourceId: number;
  resourceTitle: string;
};
