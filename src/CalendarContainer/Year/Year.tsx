import { ToperationOption } from "../utils";
import "./Year.css";

export const Year: React.FC<{
    currentYear: number;
    onSwitchYear: (option: ToperationOption) => void;
}> = (props) => {
    const { onSwitchYear, currentYear } = props;
    return (
        <div className="custom_years_control__container">
            <div onClick={() => onSwitchYear("prev")}>{currentYear - 1}</div>
            <div>{currentYear}</div>
            <div onClick={() => onSwitchYear("next")}>{currentYear + 1}</div>
        </div>
    );
};
