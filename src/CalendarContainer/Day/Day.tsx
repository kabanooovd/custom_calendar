import "./Day.css";

export const Day: React.FC<{
    days: Date[];
    className: string;
    onSetChosenDate?: (value: Date) => void;
}> = (props) => {
    const { days, className, onSetChosenDate } = props;
    return (
        <>
            {days.map((date) => {
                const currentDate = date.getDate();
                const _key = `${currentDate}_${date.getMonth()}`;
                const isWeekend = date.getDay() === 6 || date.getDay() === 0;
                const today = new Date();
                const isToday = today.getDate() === date.getDate() && today.getMonth() === date.getMonth()
                const _classname = [className, isWeekend ? "weekend" : ""].join(" ");
                return (
                    <div
                        key={_key}
                        className={isToday ? "current_today" : _classname}
                        onClick={() => onSetChosenDate && onSetChosenDate(date)}
                    >
                        {currentDate}
                    </div>
                );
            })}
        </>
    );
};
