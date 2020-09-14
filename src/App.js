import React from 'react';
import FormContainer from './containers/FormContainer'
import GameContainer from './containers/GameContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hang Man</h1>
      <FormContainer />
      <GameContainer />
    </div>
  );
}

export default App;
