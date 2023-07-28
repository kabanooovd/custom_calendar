import { Day } from "../Day/Day";
import { WEEK_DAYS_RUS_MAPPER } from "../utils";
import "./DaysList.css";

export const DaysList: React.FC<{
    currnetMonth: string;
    currentYear: number;
    prevDays: Date[];
    currentDaysList: Date[];
    nexDays: Date[];
    onSwitchYear: (option: "next" | "prev") => void;
    onSwitchMonth: (option: "next" | "prev") => void;
}> = (props) => {
    const {
        currnetMonth,
        currentYear,
        prevDays,
        currentDaysList,
        nexDays,
        onSwitchYear,
        onSwitchMonth,
    } = props;

    const weekDays = new Array(7).fill(null);
    return (
        <>
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
                <span>{currnetMonth}</span>
                <div onClick={() => onSwitchMonth("next")}>&#62;</div>
            </div>
            <div className="custom_dayslist_content__wrapper">
                {weekDays.map((_, idx) => (
                    <div key={idx} className="custom_day_title__dayslist">
                        {WEEK_DAYS_RUS_MAPPER[idx]}
                    </div>
                ))}
                <Day days={prevDays} kind="prev" />
                <Day days={currentDaysList} kind="current" />
                <Day days={nexDays} kind="next" />
            </div>
        </>
    );
};
