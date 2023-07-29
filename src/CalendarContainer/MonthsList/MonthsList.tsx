import { Year } from "../Year/Year";
import { MONTHS_MAPPER, TCalendarMode, ToperationOption } from "../utils";
import "./MonthsList.css";

export const MonthsList: React.FC<{
    currentYear: number;
    onSwitchYear: (option: ToperationOption) => void;
    onSetMonth: (month: number) => void;
    setMode: (mode: TCalendarMode) => void;
}> = (props) => {
    const { currentYear, onSwitchYear, onSetMonth, setMode } = props;
    const monthsList: number[] = [];
    while (monthsList.length < 12) monthsList.push(monthsList.length + 1);
    return (
        <div className="months__container">
            <Year
                currentYear={currentYear}
                onSwitchYear={onSwitchYear}
                setMode={setMode}
            />
            <div className="months__wrapper">
                {monthsList.map((month, idx) => {
                    const onHandleClick = () => {
                        onSetMonth(month);
                        setMode("days");
                    };
                    const isToMonth = new Date().getMonth() === month;
                    return (
                        <div
                            key={`${idx}${month}`}
                            className={
                                isToMonth
                                    ? "months_current__item"
                                    : "months__item"
                            }
                            onClick={onHandleClick}
                        >
                            {MONTHS_MAPPER[month]}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
