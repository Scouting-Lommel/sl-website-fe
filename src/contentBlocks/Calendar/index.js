import Calendar from "@/components/organisms/Calendar";

const CalendarBlock = ({ Title, data }) => {
  const contentData = { Title };

  return <Calendar info={contentData} calendarData={data.calendarDates} />;
};

export default CalendarBlock;
