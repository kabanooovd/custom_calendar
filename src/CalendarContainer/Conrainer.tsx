import React from "react";
import "./Conrainer.css";
import {
    MONTHS_MAPPER,
    WEEK_DAYS_RUS_MAPPER,
    onGetDaysInMonth,
    onGetOtherMonthDays,
} from "./utils";
import { Day } from "./Day/Day";

export const Conrainer = () => {
    const currentDate = new Date();
    const initialMonth = currentDate.getMonth() + 1;
    const initialYear = currentDate.getFullYear();
    const [currnetMonth, setCurrnetMonth] = React.useState(initialMonth);
    const [currentYear, setCurrentYear] = React.useState(initialYear);
    const currentDaysList = onGetDaysInMonth(currnetMonth, currentYear);
    const initWeekDayInMonth = currentDaysList[0].getDay();
    const endWeekDayInMonth =
        currentDaysList[currentDaysList.length - 1].getDay();
    const weekDays = new Array(7).fill(null);
    const prevDays = onGetOtherMonthDays(
        onGetDaysInMonth(currnetMonth, currentYear),
        initWeekDayInMonth,
        "prev"
    );
    const nexDays = onGetOtherMonthDays(
        onGetDaysInMonth(currnetMonth, currentYear),
        endWeekDayInMonth,
        "next"
    );

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
            <>
                <div className="custom_calendar_content__wrapper">
                    {weekDays.map((_, idx) => (
                        <div key={idx} className="custom_day_title__container">
                            {WEEK_DAYS_RUS_MAPPER[idx]}
                        </div>
                    ))}
                    <Day days={prevDays} kind="prev" />
                    <Day days={currentDaysList} kind="current" />
                    <Day days={nexDays} kind="next" />
                </div>
            </>
        </div>
    );
};
