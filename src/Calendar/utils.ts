// метод формерует список дней из месяца
export const onGetDaysInMonth = (month: number, year: number): Date[] =>
    new Array(31)
        .fill("")
        .map((v, i) => new Date(year, month - 1, i + 1))
        .filter((v) => v.getMonth() === month - 1);

// метод преобразует дату типа Date так, чтобы не сбивался timezone
export const onGetIsoStringWithNoTimeZone = (
    date: Date
): string => {
    const timestamp = date.getTime() - date.getTimezoneOffset() * 60000;
    const correctDate = new Date(timestamp);
    return correctDate.toISOString();
};

// Метод преобразует ISO дату в объейки с отформатированными датой и временем 
export const onFormatDate = (date: string) => {
    return {
        date: date.split('T', 1)[0],
        time: date.split('T', 2)[1].split('.')[0]
    }
} 

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
}

export const WEEK_DAYS_MAPPER: Record<number, string> = {
    0: "Пн",
    1: "Вт",
    2: "Ср",
    3: "Чт",
    4: "Пт",
    5: "Сб",
    6: "Вс",
}











// // метод формирует объект, где ключи это месяцы и значения это дни в этом месяце
// export const onGetCalendarData = (
//     monthsList: { month: number; year: number }[]
// ) => {
//     return monthsList.reduce(
//         (
//             acc: Record<string, Date[]>,
//             { month, year }: { month: number; year: number }
//         ) => {
//             acc[month] = onGetDaysInMonth(month, year);
//             return acc;
//         },
//         {}
//     );
// };

// // метод возвращает те месяцы и годы, которые есть в списке дат
// export const onGetMonthsAndYearsList = (
//     datesList: string[]
// ): { month: number; year: number }[] => {
//     return Array.from(
//         new Set(
//             datesList.map((d) => ({
//                 month: new Date(d).getMonth() + 1,
//                 year: new Date(d).getFullYear(),
//             }))
//         )
//     );
// };
