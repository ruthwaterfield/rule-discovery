import React, {Component, Fragment} from 'react'
import Guess from "./guess";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class GuessGenerator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfGuesses: 0,
      guesses: [],
      ruleStated: false
    }

    this.handleNewGuess = this.handleNewGuess.bind(this);
    this.handleStateRule = this.handleStateRule.bind(this);
    this.ruleStated = React.createRef()
  }

  handleNewGuess() {
    this.setState((state) => {
      return {
        numberOfGuesses: state.numberOfGuesses + 1,
        guesses: [
          ...state.guesses,
          <Guess key={state.numberOfGuesses}
                 ref={this.ruleStated}/>
                 ]
      }
    })
  }

  handleStateRule() {
    this.setState({ruleStated: true})
    this.ruleStated.current.ruleStated()
  }

  render() {
    return (
      <Fragment>
        {this.state.guesses}
        <Button name={'newGuess'} onClick={this.handleNewGuess} disabled={this.state.ruleStated}>
          New guess
        </Button>
        <InputGroup className={"mt-3 mb-5"}>
          <FormControl
            type="text"
            disabled={this.state.ruleStated}
          />
          <InputGroup.Append>
            <Button name={'stateRule'} variant="outline-secondary" onClick={this.handleStateRule}
                    disabled={this.state.ruleStated}>
              State rule
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Fragment>
    )
  }
}

export default GuessGenerator
