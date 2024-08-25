import { useState } from "react";
import Input from "./Input";
import Calendar from "./Calendar";

const DatePicker = () => {
  const [date, setDate] = useState(() => new Date());
  const [isOpenCalendar, setIsOpenCalendar] = useState(true);
  const openCalendar = () => setIsOpenCalendar(true);
  const closeCalendar = () => setIsOpenCalendar(false);

  return (
    <div>
      <Input
        date={date}
        openCalendar={openCalendar}
        closeCalendar={closeCalendar}
      />
      {isOpenCalendar && <Calendar date={date} setDate={setDate} />}
    </div>
  );
};

export default DatePicker;
