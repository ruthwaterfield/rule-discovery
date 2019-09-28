import React from 'react';
import Instructions from "./instructions";
import GuessGenerator from "./guessGenerator";
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container className="App">
      <h1>Rule Discovery</h1>
      <Instructions/>
      <GuessGenerator/>
    </Container>
  );
}

export default App;
