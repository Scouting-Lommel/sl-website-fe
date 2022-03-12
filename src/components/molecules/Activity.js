export default function Activity({ activity }) {
  return (
    <>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
        {parseDateTime(
          activity.StartTime,
          activity.EndTime
        )}
      </time>
      <div className="text-lg font-semibold text-gray-900 ">
        {activity.Title}
      </div>
      <p className="mb-4 text-base font-normal text-gray-500 ">
        {activity.Description}
      </p>
    </>
  );
}

function parseDateTime(startDate, endDate) {
  startDate = startDate.split("T");
  endDate = endDate.split("T");
  startDate[1] = startDate[1].substring(0, startDate[1].length - 8);
  endDate[1] = endDate[1].substring(0, endDate[1].length - 8);
  if (startDate[0] == endDate[0]) {
    return startDate[0] + " " + startDate[1] + " - " + endDate[1];
  }
  return (
    startDate[0] + " " + startDate[1] + " - " + endDate[0] + " " + endDate[1]
  );
}
