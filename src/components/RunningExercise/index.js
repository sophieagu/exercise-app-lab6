import React, {useState} from 'react';

function RunningExercise() {
    const[laps, setLaps] = useState([]);
    const[time, setTime] = useState(0);
    const[interval, setTimeInterval] = useState(null);

     //function to format time like 00:00:00
  const changeTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hours * 3600)) / 60);
    const seconds = time - (hours * 3600) - (minutes * 60);

    return `${hours.toString().padStart(2, '0') + ':' + 
      minutes.toString().padStart(2, '0') + ':' + 
      seconds.toString().padStart(2, '0')}`;

  };

  //when start is clicked, setInterval is used to delay running time
  const startClick = () => {
    if(interval) {
      clearInterval(interval);
    }
    setTimeInterval(setInterval(() => setTime((time) => time + 1), 15));
  };

  //when reset button is clicked, time is set to zero and interval is cleared and reset to null
  const resetClick = () =>  {
    setTime(0);
    clearInterval(interval);
    setTimeInterval(null);
    setLaps([]);
  };
    
    const recordLaps = () => {
        const currentTime = changeTime(time);
        setLaps((prevLaps) => [...prevLaps, currentTime]);
    }

    return (
      <div>
        <p>Timer: {changeTime(time)}</p>
        <p>Laps: {laps.length}</p>
        <button onClick={startClick}>Start</button>
        <button onClick={resetClick}>Reset</button>
        <button onClick={recordLaps}>Record Lap</button>
        <ul>
            {laps.map((lap, index) => (
            <li key={index}>{lap}</li>
            ))}
        </ul>
      </div>
    );
}

export default RunningExercise;