import { useState } from "react";
import CalendarDay from "@/molecules/CalendarDay";

const Calendar = ({ info, calendarData }) => {
  // the states that the calendar can be in
  const [getMonth, setMonth] = useState(new Date().getMonth());
  const [getYear, setYear] = useState(new Date().getFullYear());
  const [getDayList, setDayList] = useState([]);
  const [getRentedDayList, setRentedDayList] = useState([]);

  let rentedDates = [];
  calendarData.forEach((element) => {
    let tmp1 = new Date(element.attributes.StartDate);
    let tmp2 = new Date(element.attributes.EndDate);
    rentedDates.push({
      start: new Date(
        monthMap[tmp1.getMonth()] +
          " " +
          tmp1.getDate() +
          ", " +
          tmp1.getFullYear()
      ).getTime(),
      end: new Date(
        monthMap[tmp2.getMonth()] +
          " " +
          tmp2.getDate() +
          ", " +
          tmp2.getFullYear()
      ).getTime(),
    });
  });

  if (getRentedDayList.length == 0) {
    setRentedDayList(rentedDates);
    console.log(rentedDates[0]);
  }
  // put all days of the month into CalendarDays
  if (getDayList.length == 0) {
    setDayList(calcDayList(getMonth, getYear, rentedDates));
  }
  return (
    <>
      <h1 className="text-5xl font-bold text-center py-3">{info.Title}</h1>
      {/* calendar */}
      <div className="pb-3 px-36">
        <div className="flex justify-between">
          {/* calendar header */}
          <div>
            {/* prev month button */}
            <button
              onClick={() =>
                prevMonth(
                  getMonth,
                  setMonth,
                  getYear,
                  setYear,
                  setDayList,
                  getRentedDayList
                )
              }
            >
              Prev
              <svg
                className="mr-2"
                width="24"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-center">
            {/* month + year display */}
            <h3 className="text-xl">{getYear}</h3>
            <h3 className="text-xl">{monthMap[getMonth]}</h3>
          </div>
          <div>
            {/* next month button */}
            <button
              onClick={() =>
                nextMonth(
                  getMonth,
                  setMonth,
                  getYear,
                  setYear,
                  setDayList,
                  getRentedDayList
                )
              }
            >
              Next
              <svg
                className="ml-2"
                width="24"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <ol className="grid grid-cols-7 border-2 text-center">
            {/* days row */}
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li>Sun</li>
          </ol>
          {/* calendar days/body */}
          <ol className="grid grid-cols-7 border-2 text-center">
            {getDayList.map((day, i) => {
              return <li key={"calendar" + i}>{day}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

const monthMap = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function calcDayList(getMonth, getYear, getRentedDayList) {
  let dayList = [];
  // offset the dates by adding empty things in the front of the array
  let startDate = new Date(monthMap[getMonth] + " 1, " + getYear).getDay();
  let buffers = startDate == 0 ? 6 : startDate - 1;
  for (let i = 0; i < buffers; i++) {
    dayList.push(<div></div>);
  }
  for (let i = 0; i < daysInMonth(getMonth, getYear); i++) {
    // check if the date is in the list of dates, if it is, color red
    const j = i + 1;
    let day = new Date(monthMap[getMonth] + " " + j + ", " + getYear).getTime();
    let isRented = false;
    for (let k = 0; k < getRentedDayList.length; k++) {
      const element = getRentedDayList[k];
      if (element.start <= day && element.end >= day) {
        isRented = true;
        break;
      }
    }
    dayList.push(
      <CalendarDay number={i + 1} isBooked={isRented}></CalendarDay>
    );
  }
  return dayList;
}

const nextMonth = (
  getMonth,
  setMonth,
  getYear,
  setYear,
  setDayList,
  getRentedDayList
) => {
  if (getMonth >= 11) {
    setMonth(0);
    setYear(getYear + 1);
    setDayList(calcDayList(0, getYear + 1, getRentedDayList));
  } else {
    setMonth(getMonth + 1);
    setDayList(calcDayList(getMonth + 1, getYear, getRentedDayList));
  }
};

const prevMonth = (
  getMonth,
  setMonth,
  getYear,
  setYear,
  setDayList,
  getRentedDayList
) => {
  if (getMonth <= 0) {
    setMonth(11);
    setYear(getYear - 1);
    setDayList(calcDayList(11, getYear - 1, getRentedDayList));
  } else {
    setMonth(getMonth - 1);
    setDayList(calcDayList(getMonth - 1, getYear, getRentedDayList));
  }
};

export { Calendar };
