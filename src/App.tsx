import React from "react";
import "./App.css";
import { Conrainer } from "./CalendarContainer/Conrainer";

function App() {
    const [date, setDate] = React.useState<Date | null>(null);
    return (
        <div className="App">
            {date && <h1>Вы выбрали: {date.toLocaleDateString("ru")}</h1>}
            <Conrainer value={date} onChange={setDate} />
        </div>
    );
}

export default App;
