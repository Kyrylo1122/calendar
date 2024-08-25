const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDaysInMonth = (date: Date) => {
  const weeks = [];
  let currentWeek = [];

  const lastDayInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  for (let i = 1; i <= lastDayInMonth; i++) {
    const currentDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      i
    ).getDay();
    currentWeek.push(days[currentDay]);

    if (!currentDay) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length) {
    weeks.push(currentWeek);
  }
  return weeks;
};

export default getDaysInMonth;
