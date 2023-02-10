const CalendarDay = ({ number, isBooked }) => {
  const style = isBooked ? 'bg-red-500' : '';
  return (
    <>
      <div className={style}>{number}</div>
    </>
  );
};

export default CalendarDay;
