import React, {Component, Fragment} from 'react'
import Guess from "./guess";
import Button from "react-bootstrap/Button";

class GuessGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfGuesses: 0,
      guesses: []
    }

    this.handleNewGuess = this.handleNewGuess.bind(this);
  }

  handleNewGuess() {
    this.setState({
      numberOfGuesses: this.state.numberOfGuesses + 1,
      guesses: [...this.state.guesses, <Guess key={this.state.numberOfGuesses} guessNumber={this.state.numberOfGuesses}/>]
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.guesses}
        <Button name={'newGuess'} onClick={this.handleNewGuess} >New guess</Button>
      </Fragment>
    )
  }
}

export default GuessGenerator


