import React from 'react';
import './App.css';
import Instructions from "./instructions";
import Header from "./header";
import GuessGenerator from "./guessGenerator";


function App() {
  return (
    <div className="App">
      <Header text={'Rule Discovery'}/>
      <Instructions/>
      <GuessGenerator/>
    </div>
  );
}

export default App;
