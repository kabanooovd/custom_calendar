import React from "react";
import "./Calendar.css";
import {
    MONTHS_MAPPER,
    WEEK_DAYS_MAPPER,
    WEEK_DAYS_RUS_MAPPER,
    onGetDaysInMonth,
    onGetPrevDays,
} from "./utils";
import { Days } from "./Day/Days";

export const Calendar = () => {


    const currentDate =                         new Date("2023/07/25");
    const initialMonth =                        currentDate.getMonth() + 1;
    const initialYear =                         currentDate.getFullYear();
    const [currnetMonth, setCurrnetMonth] =     React.useState(initialMonth);
    const [currentYear, setCurrentYear] =       React.useState(initialYear);
    const currentDaysList =                     onGetDaysInMonth(currnetMonth, currentYear);
    const initWeekDayInMonth =                  currentDaysList[0].getDay();
    const endWeekDayInMonth =                   currentDaysList[currentDaysList.length - 1].getDay();
    const weekDays =                            new Array(7).fill(null);
    const firstWeekDay =                        WEEK_DAYS_MAPPER[initWeekDayInMonth];
    const lastWeekDay =                         WEEK_DAYS_MAPPER[endWeekDayInMonth];
    const prevDays =                            onGetPrevDays(
                                                    onGetDaysInMonth(
                                                        currnetMonth > 1 ? currnetMonth - 1 : 12,
                                                        currnetMonth > 1 ? currentYear : currentYear - 1
                                                    ),
                                                    firstWeekDay
                                                );

    const nexDays =                             onGetDaysInMonth(currnetMonth + 1, currentYear)
                                                    .slice(0, 6 - lastWeekDay);





    // console.log("==> " , foo(12, 12, "+"))

    const onSwitchMonth = (option: "next" | "prev") => {
        if (option === "next") {
            setCurrnetMonth((month) => (month < 12 ? month + 1 : 1));
            setCurrentYear((year) => (currnetMonth < 12 ? year : year + 1));
        }
        if (option === "prev") {
            setCurrnetMonth((month) => (month > 1 ? month - 1 : 12));
            setCurrentYear((year) => (currnetMonth === 1 ? year - 1 : year));
        }
    };

    const onSwitchYear = (option: "next" | "prev") => {
        option === "next" && setCurrentYear((year) => year + 1);
        option === "prev" && setCurrentYear((year) => year - 1);
    };

    return (
        <div className="custom_calendar__container">
            <div className="custom_years_control__container">
                <div onClick={() => onSwitchYear("prev")}>
                    {currentYear - 1}
                </div>
                <div>{currentYear}</div>
                <div onClick={() => onSwitchYear("next")}>
                    {currentYear + 1}
                </div>
            </div>
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
