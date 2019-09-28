import React, {Component, Fragment} from 'react'

class Guess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      hypothesis: '',
      number1: '',
      number2: '',
      number3: '',
      feedback: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.number1 ||
      !this.state.number2 ||
      !this.state.number3) {
      this.setState({feedback: 'Please enter 3 integers'})
    }
    else if (!Number.isInteger(+this.state.number1) ||
      !Number.isInteger(+this.state.number2) ||
      !Number.isInteger(+this.state.number3)) {
      this.setState({feedback: 'Please enter 3 integers'})
    } else {
      this.setState({disabled: true})
      this.setState({feedback: this.doNumbersConform(this.state.number1, this.state.number2, this.state.number3)})
    }
  }

  doNumbersConform(number1, number2, number3) {
    if (number1 < number2 && number2 < number3) {
      return 'Conforms'
    } else {
      return 'Does not Conform'
    }
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Hypothesis:
            <input
              type="text"
              name={'hypothesis'}
              value={this.state.hypothesis}
              onChange={this.handleInputChange}
              disabled={this.state.disabled}
            />
          </label>
          <label>
            Numbers:
            <input
              type="text"
              name={'number1'}
              value={this.state.number1}
              onChange={this.handleInputChange}
              disabled={this.state.disabled}
            />
            <input type="text" name={'number2'} value={this.state.number2} onChange={this.handleInputChange} disabled={this.state.disabled}/>
            <input type="text" name={'number3'} value={this.state.number3} onChange={this.handleInputChange} disabled={this.state.disabled}/>
          </label>
          <input type="submit" value="Submit" disabled={this.state.disabled}/>
          <label>
            Feedback:
          <label>{this.state.feedback}</label>
          </label>
        </form>
      </Fragment>
    )
  }
}

export default Guess


