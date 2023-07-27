// метод формерует список дней из месяца
export const onGetDaysInMonth = (month: number, year: number): Date[] =>
    new Array(31)
        .fill("")
        .map((v, i) => new Date(year, month - 1, i + 1))
        .filter((v) => v.getMonth() === month - 1);

// метод преобразует дату типа Date так, чтобы не сбивался timezone
export const onGetIsoStringWithNoTimeZone = (date: Date): string => {
    const timestamp = date.getTime() - date.getTimezoneOffset() * 60000;
    const correctDate = new Date(timestamp);
    return correctDate.toISOString();
};

// Метод преобразует ISO дату в объейки с отформатированными датой и временем
export const onFormatDate = (date: string) => {
    return {
        date: date.split("T", 1)[0],
        time: date.split("T", 2)[1].split(".")[0],
    };
};

// Метод принимает список дат пред месяца и номер дня текущей недели
export const onGetPrevDays = (
    prevMonthDaysList: Date[],
    firstWeekDayOfCurrentMonth: number
): Date[] => {
    if (firstWeekDayOfCurrentMonth > 0) {
        // console.log("==> ", firstWeekDayOfCurrentMonth)
        return prevMonthDaysList.slice(-firstWeekDayOfCurrentMonth);
    }
    return [];
};

export const MONTHS_MAPPER: Record<number, string> = {
    1: "Январь",
    2: "Февраль",
    3: "Март",
    4: "Апрель",
    5: "Май",
    6: "Июнь",
    7: "Июль",
    8: "Август",
    9: "Сентябрь",
    10: "Октябрь",
    11: "Ноябрь",
    12: "Декабрь",
};

export const WEEK_DAYS_RUS_MAPPER: Record<number, string> = {
    0: "Пн",
    1: "Вт",
    2: "Ср",
    3: "Чт",
    4: "Пт",
    5: "Сб",
    6: "Вс",
};

export const WEEK_DAYS_MAPPER: Record<number, number> = {
    1: 0, 
    2: 1, 
    3: 2, 
    4: 3, 
    5: 4, 
    6: 5, 
    0: 6, 
};
