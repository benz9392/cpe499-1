import React, { useState } from 'react';
import './App.css';

const choices = [
  { name: 'rock', image: 'rock.png' },
  { name: 'paper', image: 'paper.png' },
  { name: 'scissors', image: 'scissors.png' }
];

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    generateComputerChoice();
    calculateResult(choice);
  };

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex].name);
  };

  const calculateResult = (playerChoice) => {
    if (playerChoice === computerChoice) {
      setResult('Tie');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You Win!');
    } else {
      setResult('You Lose!');
    }
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <img
            key={choice.name}
            src={choice.image}
            alt={choice.name}
            className={playerChoice === choice.name ? 'selected' : ''}
            onClick={() => handlePlayerChoice(choice.name)}
          />
        ))}
      </div>
      <h2>{result}</h2>
    </div>
  );
};

export default App;