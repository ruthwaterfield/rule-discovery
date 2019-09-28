import React from 'react';
import Instructions from "./instructions";
import GuessGenerator from "./guessGenerator";
import {Container} from "react-bootstrap";
import BeginningObservation from "./beginningObservation";

function App() {
  return (
    <Container className="App">
      <h1>Rule Discovery</h1>
      <Instructions/>
      <BeginningObservation/>
      <GuessGenerator/>
    </Container>
  );
}

export default App;
