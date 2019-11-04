import React, {useState} from "react";
import "./App.css";

const Timer = () => {
    const [seconds, setSeconds] = useState(0),
          [secondTens, setSecondTens] = useState(0),
          [minutes, setMinutes] = useState(5),
          [minuteTens, setMinuteTens] = useState(1);

    return (
        <div className="timer">{minuteTens}{minutes}:{secondTens}{seconds}</div>
    )
}

export default Timer;