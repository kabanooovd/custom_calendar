import React from "react";
import "./Calendar.css";
import {
    MONTHS_MAPPER,
    WEEK_DAYS_MAPPER,
    WEEK_DAYS_RUS_MAPPER,
    onGetDaysInMonth,
    onGetIsoStringWithNoTimeZone,
    onGetPrevDays,
} from "./utils";
import { Days } from "./Day/Days";

export const Calendar = () => {
    const currentDate = new Date("2023/07/25");
    const _currnetMonth = currentDate.getMonth() + 1;
    const _currentYear = currentDate.getFullYear();

    const [currnetMonth, setCurrnetMonth] = React.useState(_currnetMonth);
    const [currentYear, setCurrentYear] = React.useState(_currentYear);
    const currentDaysList = onGetDaysInMonth(currnetMonth, currentYear);
    const _firstWeekDay = currentDaysList[0].getDay();
    const _lastWeekDay = currentDaysList[currentDaysList.length - 1].getDay();
    const weekDays = new Array(7).fill(null);
    const firstWeekDay = WEEK_DAYS_MAPPER[_firstWeekDay];
    const lastWeekDay = WEEK_DAYS_MAPPER[_lastWeekDay];
    const prevDays = onGetPrevDays(
        onGetDaysInMonth(
            currnetMonth > 1 ? currnetMonth - 1 : 12,
            currnetMonth > 1 ? currentYear : currentYear - 1
        ),
        firstWeekDay
    );

    const nexDays = onGetDaysInMonth(currnetMonth + 1, currentYear).slice(
        0,
        6 - lastWeekDay
    );
    const onClickDay = (day: Date) => {
        alert(onGetIsoStringWithNoTimeZone(day));
    };

    // TODO: Создать и обработать выбор года и создать ф-ю карусел чисел
    const foo = (num: number, max: number, opt: "+" | "-"): number => {

        let response = opt === "+" ? num + 1 : num - 1;

        if (num >= max) {
            response = 0;
        } else if (num < 0) {
            response =  max;
        }

        return response
    };

    console.log("==> " , foo(12, 12, "+"))

    const onSwitchMonth = (option: "next" | "prev") => {
        option === "next" && setCurrnetMonth((val) => (val < 12 ? val + 1 : 1));
        option === "prev" && setCurrnetMonth((val) => (val > 1 ? val - 1 : 12));
    };

    return (
        <div className="custom_calendar__container">
            <div className="custom_month_control__container">
                <div onClick={() => onSwitchMonth("prev")}>&#60;</div>
                <span>{MONTHS_MAPPER[currnetMonth]}</span>
                <div onClick={() => onSwitchMonth("next")}>&#62;</div>
            </div>
            <div className="custom_calendar_content__wrapper">
                {weekDays.map((_, idx) => (
                    <div key={idx} className="custom_day_title__container">
                        {WEEK_DAYS_RUS_MAPPER[idx]}
                    </div>
                ))}
                <Days
                    days={prevDays}
                    className={"custom_next_day__container"}
                />
                <Days
                    days={currentDaysList}
                    className={"custom_day__container"}
                />
                <Days days={nexDays} className={"custom_next_day__container"} />
            </div>
        </div>
    );
};
