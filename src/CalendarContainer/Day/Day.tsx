import { TDayKind, onCheckCurrentDateProp } from "../utils";
import "./Day.css";

export const Day: React.FC<{
    days: Date[];
    kind: TDayKind;
    onSetChosenDate?: (value: Date) => void;
}> = (props) => {
    const { days, kind, onSetChosenDate } = props;

    const STYLES_MAPPER: Record<TDayKind, string> = {
        current: "current_day",
        next: "other_day",
        prev: "other_day",
    };

    return (
        <>
            {days.map((date) => {
                const currentDate = date.getDate();
                const _key = `${currentDate}_${date.getMonth()}`;
                const isWeekend = date.getDay() === 6 || date.getDay() === 0;
                const className = [
                    onCheckCurrentDateProp(date, "days")
                        ? "current_today"
                        : STYLES_MAPPER[kind],
                    isWeekend ? "weekend" : "",
                ].join(" ");
                return (
                    <div
                        key={_key}
                        className={className}
                        onClick={() => onSetChosenDate && onSetChosenDate(date)}
                    >
                        {currentDate}
                    </div>
                );
            })}
        </>
    );
};
