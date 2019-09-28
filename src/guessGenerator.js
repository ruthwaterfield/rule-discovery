import React, {Component, Fragment} from 'react'
import Guess from "./guess";

class GuessGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfGuesses: 1,
      guesses: []
    }

    this.handleNewGuess = this.handleNewGuess.bind(this);
  }

  handleNewGuess() {
    this.setState({
      numberOfGuesses: this.state.numberOfGuesses++,
      guesses: [...this.state.guesses, <Guess key={this.state.numberOfGuesses}/>]
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.guesses}
        <button name={'newGuess'} onClick={this.handleNewGuess} >New guess</button>
      </Fragment>
    )
  }
}

export default GuessGenerator


