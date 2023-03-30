import './App.css';
import { useState } from 'react';

function Challenge(){
  const [result, setResult] = useState();

  async function onSubmit(event){
    event.preventDefault();
    // create a list of challenges
    const challenges = [
      "Read for 10 minutes",
      "Take a walk!",
      "Focus on your breating and meditate for 5 minutes"
    ]
    setResult(challenges[Math.floor(Math.random()*challenges.length)]);
  }
  return ( 
    <div className='challenge'>
      <h1>Try this challenge today: </h1>
        <button onClick={onSubmit}>Generate Challenge</button>
      <p>{result}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header>Daily Challenge</header>
      <Challenge/>
    </div>
  );
}

export default App;
