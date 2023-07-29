import { TCalendarMode } from "../utils";
import "./YearsList.css";

export const YearsList: React.FC<{
    currentYear: number;
    setCurrentYear: (currentYear: number) => void;
    setMode: (mode: TCalendarMode) => void;
}> = (props) => {
    const { currentYear, setCurrentYear, setMode } = props;

    const yaersList = Array(25)
        .fill(null)
        .map((_, idx) => idx + currentYear);
    return (
        <div className="yaers__wrapper">
            {yaersList.map((year) => {
                const onHandleClick = () => {
                    setCurrentYear(year);
                    setMode("months");
                };
                return (
                    <div
                        key={year}
                        className="years__item"
                        onClick={onHandleClick}
                    >
                        {year}
                    </div>
                );
            })}
        </div>
    );
};
