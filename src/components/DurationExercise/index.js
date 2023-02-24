// changeTime function supplemented by https://www.geeksforgeeks.org/how-to-convert-seconds-to-time-string-format-hhmmss-using-javascript/
import React, {useState} from 'react';

 function DurationExercise() {
  //set states for time and interval
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
  };

    //timer is displayed
    //start and reset buttons are displayed
    return (
    <div>
      <p>Timer: {changeTime(time)}</p>
      <button onClick={startClick}>Start</button>
      <button onClick={resetClick}>Reset</button>
    </div>
    );
}
export default DurationExercise;






