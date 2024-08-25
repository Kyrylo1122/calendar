import { useMemo } from "react";
import getDaysInMonth from "../utils/getDaysInMonth";
interface CalendarProps {
  date: Date;
  setDate: (date: Date) => void;
}
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CalendarCell = ({ day }: { day: number }) => <>{day}</>;
const Calendar = ({ date, setDate }: CalendarProps) => {
  const [day, month, year] = useMemo(() => {
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentDay = date.getDay();
    return [currentDay, currentMonth, currentYear];
  }, [date]);

  const daysInAMonth = getDaysInMonth(new Date(2024, 5, 12));
  const nextYear = () => {
    setDate(new Date());
  };
  const previousYear = () => {};
  return (
    <div style={{ backgroundColor: "blue" }}>
      Calendar
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button style={{ padding: "5px" }} onClick={previousYear}>
            {"<"}
          </button>
          {year} {months[month]}
          <button style={{ padding: "5px" }} onClick={nextYear}>
            {">"}
          </button>
        </div>
        <div>Day: {day}</div>

        <table>
          <caption>Front-end web developer course 2021</caption>
          <thead>
            <tr>
              {days.map((weekDay) => (
                <th scope="col" key={weekDay}>
                  {weekDay}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Chris</th>
              <td>HTML tables</td>
              <td>22</td>
            </tr>
          </tbody>
          {/* <tfoot>
            <tr>
              <th scope="row" colspan="2">
                Average age
              </th>
              <td>33</td>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default Calendar;
