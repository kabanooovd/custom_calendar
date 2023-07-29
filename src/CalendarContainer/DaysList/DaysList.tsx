import { Day } from "../Day/Day";
import { Year } from "../Year/Year";
import {
    TCalendarMode,
    ToperationOption,
    WEEK_DAYS_RUS_MAPPER,
} from "../utils";
import "./DaysList.css";

export const DaysList: React.FC<{
    currnetMonth: string;
    currentYear: number;
    prevDays: Date[];
    currentDaysList: Date[];
    nexDays: Date[];
    onSwitchYear: (option: ToperationOption) => void;
    onSwitchMonth: (option: ToperationOption) => void;
    setMode: (mode: TCalendarMode) => void;
}> = (props) => {
    const {
        currnetMonth,
        currentYear,
        prevDays,
        currentDaysList,
        nexDays,
        onSwitchYear,
        onSwitchMonth,
        setMode,
    } = props;

    const weekDays = new Array(7).fill(null);
    return (
        <>
            <Year
                currentYear={currentYear}
                onSwitchYear={onSwitchYear}
                setMode={setMode}
            />
            <div className="custom_month_control__container">
                <div onClick={() => onSwitchMonth("prev")}>&#60;</div>
                <span onClick={() => setMode("months")}>{currnetMonth}</span>
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
