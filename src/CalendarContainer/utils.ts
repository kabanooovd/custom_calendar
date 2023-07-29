export type ToperationOption = "prev" | "next";
export type TDayKind = "current" | ToperationOption;
export type TCalendarMode = "days" | "months" | "years";

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

// Метод проверяет свойство входящей даты с указанными свойствами сегодняшней даты
export const onCheckCurrentDateProp = (
    incomingDate: Date,
    dateProp: TCalendarMode
): boolean => {
    const today = new Date();
    switch (dateProp) {
        case "days":
            return (
                today.getDate() === incomingDate.getDate() &&
                today.getMonth() === incomingDate.getMonth()
            );
        case "months":
            return today.getMonth() === incomingDate.getMonth();
        case "years":
            return today.getFullYear() === incomingDate.getFullYear();
        default:
            return false;
    }
};

// Метод принимает список дней в месяце, номер дня недели по ЖС и опцию (последняя неделя предыдущего месяца или 1я неделя следующего месяца)
export const onGetOtherMonthDays = (
    otherMonthDaysList: Date[],
    weekDayOfCurrentMonth: number,
    opt: ToperationOption
): Date[] => {
    const MAPPER: Record<ToperationOption, Date[]> = {
        prev: [],
        next: otherMonthDaysList.slice(0, 6),
    };
    const day = (weekDayOfCurrentMonth === 0 ? 7 : weekDayOfCurrentMonth) - 1;
    if (day > 0) {
        if (opt === "prev") return otherMonthDaysList.slice(-day);
        if (opt === "next") return otherMonthDaysList.slice(0, 6 - day);
    }
    return MAPPER[opt];
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
