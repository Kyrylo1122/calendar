import { ChangeEvent } from "react";

interface InputProps {
  date: Date;
  openCalendar: () => void;
  closeCalendar: () => void;
}

const Input = ({ date, openCalendar, closeCalendar }: InputProps) => {
  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="date"
        value={date.toString()}
        onChange={onChangeDate}
        onFocus={openCalendar}
        onBlur={closeCalendar}
      />
    </div>
  );
};

export default Input;
