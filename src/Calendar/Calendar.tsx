import React from "react";
import "./Calendar.css";
import { MONTHS_MAPPER, WEEK_DAYS_MAPPER, onGetDaysInMonth } from "./utils";

export const Calendar = () => {
    const currentDate = new Date();
    const _currnetMonth = currentDate.getMonth() + 1;
    const _currentYear = currentDate.getFullYear();

    const [currnetMonth, setCurrnetMonth] = React.useState(_currnetMonth);
    const [currentYear, setCurrentYear] = React.useState(_currentYear);
    const [currentDaysList, setCurrentDaysList] = React.useState(
        onGetDaysInMonth(currnetMonth, currentYear)
    );
    const firstWeekDay = currentDaysList[0].getDay();
    const emptyDays = new Array(firstWeekDay - 1).fill(null);
    const weekDays = new Array(7).fill(null);
    return (
        <div className="custom_calendar__container">
            <div className="custon_month_control__container">
                <div>l</div>
                <span>{MONTHS_MAPPER[currnetMonth]}</span>
                <div>r</div>
            </div>
            <div className="custom_calendar_content__wrapper">
                {weekDays.map((_, idx) => (
                    <div key={idx} className="custom_day_title__container">
                        {WEEK_DAYS_MAPPER[idx]}
                    </div>
                ))}
                {emptyDays.map((_, idx) => (
                    <div key={idx} />
                ))}
                {currentDaysList.map((date) => {
                    const currentDate = date.getDate();
                    const _key = `${currentDate}_${date.getMonth()}`;
                    // console.log("==> ", _currentWeekDay);
                    return (
                        <div key={_key} className="custom_day__container">
                            {currentDate}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
