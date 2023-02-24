import React, {useState} from 'react';

function RepetitionExercise() {
  //set state for repetitions
  const[repetitions, setRepetitions] = useState(0);

  //when repetition button is clicked, reps go up by 1
  const repetitionsClick = () => {
    setRepetitions(repetitions + 1);
  };

  //when reset button is clicked, reps are reset to 0
  const resetClick = () => {
    setRepetitions(0);
  }

    //reps are displayed
    //rep button and reset button displayed
    return (
      <div>
        <p>Reps:{repetitions}</p>
        <button onClick={repetitionsClick}>Complete Rep</button>
        <button onClick={resetClick}>Reset</button>
      </div>
    );
}
export default RepetitionExercise;
 



