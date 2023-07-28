import React from "react";
import "./Conrainer.css";
import { MONTHS_MAPPER, onGetDaysInMonth, onGetOtherMonthDays } from "./utils";
import { DaysList } from "./DaysList/DaysList";

export const Conrainer = () => {
    const currentDate                       =   new Date();
    const initialMonth                      =   currentDate.getMonth() + 1;
    const initialYear                       =   currentDate.getFullYear();
    const [currnetMonth, setCurrnetMonth]   =   React.useState(initialMonth);
    const [currentYear, setCurrentYear]     =   React.useState(initialYear);
    const currentDaysList                   =   onGetDaysInMonth(currnetMonth, currentYear);
    const initWeekDayInMonth                =   currentDaysList[0].getDay();
    const endWeekDayInMonth                 =   currentDaysList[currentDaysList.length - 1].getDay();
    const prevDays                          =   onGetOtherMonthDays(onGetDaysInMonth(currnetMonth, currentYear), initWeekDayInMonth, "prev");
    const nexDays                           =   onGetOtherMonthDays(onGetDaysInMonth(currnetMonth, currentYear), endWeekDayInMonth, "next");

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
            <DaysList
                currentDaysList={currentDaysList}
                nexDays={nexDays}
                prevDays={prevDays}
                currnetMonth={MONTHS_MAPPER[currnetMonth]}
                currentYear={currentYear}
                onSwitchMonth={onSwitchMonth}
                onSwitchYear={onSwitchYear}
            />
        </div>
    );
};
