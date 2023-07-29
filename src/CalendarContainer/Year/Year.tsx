import { TCalendarMode, ToperationOption } from "../utils";
import "./Year.css";

export const Year: React.FC<{
    currentYear: number;
    onSwitchYear: (option: ToperationOption) => void;
    setMode: (mode: TCalendarMode) => void;
}> = (props) => {
    const { onSwitchYear, currentYear, setMode } = props;
    return (
        <div className="custom_years_control__container">
            <div onClick={() => onSwitchYear("prev")}>{currentYear - 1}</div>
            <div onClick={() => setMode("years")}>{currentYear}</div>
            <div onClick={() => onSwitchYear("next")}>{currentYear + 1}</div>
        </div>
    );
};
