import React from "react";
import { TCalendarMode, ToperationOption } from "../utils";
import "./YearsList.css";

export const YearsList: React.FC<{
    currentYear: number;
    setCurrentYear: (currentYear: number) => void;
    setMode: (mode: TCalendarMode) => void;
}> = (props) => {
    const { currentYear, setCurrentYear, setMode } = props;
    const _yaersList = Array(25)
        .fill(null)
        .map((_, idx) => idx + currentYear);

    const [yaersList, setYearsList] = React.useState<number[]>(_yaersList);
    const onHandleYearsList = (opt: ToperationOption) => {
        opt === "next" && setYearsList((years) => years.map((y) => y + 25));
        opt === "prev" && setYearsList((years) => years.map((y) => y - 25));
    };

    return (
        <>
            <div className="btn__wrapper">
                <button onClick={() => onHandleYearsList("prev")}>&#60;</button>
                <button onClick={() => onHandleYearsList("next")}>&#62;</button>
            </div>
            <div className="yaers__wrapper">
                {yaersList.map((year) => {
                    const onHandleClick = () => {
                        setCurrentYear(year);
                        setMode("months");
                    };
                    const isToMonth = new Date().getFullYear() === year;
                    return (
                        <div
                            key={year}
                            className={
                                isToMonth
                                    ? "years_current__item"
                                    : "years__item"
                            }
                            onClick={onHandleClick}
                        >
                            {year}
                        </div>
                    );
                })}
            </div>
        </>
    );
};
