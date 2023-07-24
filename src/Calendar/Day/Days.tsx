export const Days: React.FC<{ days: Date[]; className: string }> = (props) => {
    const { days, className } = props;
    return (
        <>
            {days.map((date) => {
                const currentDate = date.getDate();
                const _key = `${currentDate}_${date.getMonth()}`;
                // const onHandleClick = () => onClickDay(date);
                return (
                    <div
                        key={_key}
                        className={className}
                        // className="custom_day__container"
                        // onClick={onHandleClick}
                    >
                        {currentDate}
                    </div>
                );
            })}
        </>
    );
};
