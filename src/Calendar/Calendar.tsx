import React from "react";
import "./Calendar.css";
import {
    MONTHS_MAPPER,
    WEEK_DAYS_MAPPER,
    onGetDaysInMonth,
    onGetIsoStringWithNoTimeZone,
} from "./utils";
import { Days } from "./Day/Days";

export const Calendar = () => {
    const currentDate = new Date("2023/07/25");
    const _currnetMonth = currentDate.getMonth() + 1;
    const _currentYear = currentDate.getFullYear();

    const [currnetMonth, setCurrnetMonth] = React.useState(_currnetMonth);
    const [currentYear, setCurrentYear] = React.useState(_currentYear);
    const [currentDaysList, setCurrentDaysList] = React.useState(
        onGetDaysInMonth(currnetMonth, currentYear)
    );
    const firstWeekDay = currentDaysList[0].getDay();
    const lastWeekDay = currentDaysList[currentDaysList.length - 1].getDay();
    const weekDays = new Array(7).fill(null);
    const prevDays = onGetDaysInMonth(currnetMonth - 1, currentYear).slice(
        -firstWeekDay + 1
    );
    const nexDays = onGetDaysInMonth(currnetMonth + 1, currentYear).slice(
        0,
        7 - lastWeekDay
    );

    const onClickDay = (day: Date) => {
        alert(onGetIsoStringWithNoTimeZone(day));
    };

    const onSwitchMonth = (option: "next" | "prev") => {
        if (option === "next") {
            setCurrnetMonth(val => val + 1)
        }
        if (option === "prev") {
            setCurrnetMonth(val => val - 1)
        }
    }

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
                        {WEEK_DAYS_MAPPER[idx]}
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
                <Days
                    days={nexDays}
                    className={"custom_next_day__container"}
                />
            </div>
        </div>
    );
};
