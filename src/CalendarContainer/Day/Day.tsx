import "./Day.css"

type TDayKind = "current" | "prev" | "next" 

export const Day: React.FC<{ days: Date[]; kind: TDayKind }> = (props) => {
    const { days, kind } = props;

    const STYLES_MAPPER: Record<TDayKind, string> = {
        "current": "current_day",
        "next": "other_day",
        "prev": "other_day"

    }

    return (
        <>
            {days.map((date) => {
                const currentDate = date.getDate();
                const _key = `${currentDate}_${date.getMonth()}`;
                return <div key={_key} className={STYLES_MAPPER[kind]}>{currentDate}</div>;
            })}
        </>
    );
};
