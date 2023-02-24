import React,{useState} from "react";
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import RunningExercise from './components/RunningExercise';
import './App.css';

function App() {
  //set states for exercise type and exercise name
  const [exerciseType, setExerciseType] = useState(null);
  const [exerciseName, setExerciseName] = useState(null);

  //set states after clicks
  const exerciseClick = (type, name) => {
    setExerciseType(type);
    setExerciseName(name);
  }

  //initialize exercise component type
  let exerciseComponent = null;

  //if statement for either exercise type selected
  if(exerciseType === "duration") {
    exerciseComponent = <DurationExercise />
  } else if(exerciseType === "repetition") {
    exerciseComponent = <RepetitionExercise />
  } else if(exerciseType === "running") {
    exerciseComponent = <RunningExercise />
  }

  //exercise menu displayed on main page
  //exercise name and options for each exercise type displayed on main page so returning is not required
  return (
    <div>
      <h1>Let's Sweat!</h1>
      <p>Select an Exercise:</p>
      <button onClick={() => exerciseClick("repetition", "Push Ups")}>Push Ups</button>
      <button onClick={() => exerciseClick("repetition", "Jumping Jacks")}>Jumping Jacks</button>
      <button onClick={() => exerciseClick("duration", "Bicycling")}>Bicycling</button>
      <button onClick={() => exerciseClick("running", "Running")}>Running</button>

      {exerciseComponent && (
        <div>
          <h2>{exerciseName}</h2>
          {exerciseComponent}
          </div>
      )}
    </div>
  );
}

export default App;
