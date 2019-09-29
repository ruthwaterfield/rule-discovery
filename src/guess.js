import React, {Component} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class Guess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      hypothesis: '',
      number1: '',
      number2: '',
      number3: '',
      feedback: '',
      feedbackVariant: ''
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
    if (!Number.isInteger(+this.state.number1) ||
      !Number.isInteger(+this.state.number2) ||
      !Number.isInteger(+this.state.number3)) {
      this.setState({feedback: 'Please enter 3 integers', feedbackVariant: 'warning'})
    } else {
      this.setState({disabled: true})
      if (this.doNumbersConform(this.state.number1, this.state.number2, this.state.number3)) {
        this.setState({feedback: 'Conforms', feedbackVariant: 'success'})
      } else {
        this.setState({feedback: 'Does not Conform', feedbackVariant: 'danger'})
      }
    }
  }

  doNumbersConform(number1, number2, number3) {
    return (parseInt(number1) < parseInt(number2) && parseInt(number2) < parseInt(number3))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="hypothesis">
          <Form.Label>Hypothesis {this.props.guessNumber}:</Form.Label>
          <Form.Control
            required
            type="text"
            name={'hypothesis'}
            placeholder="Enter hypothesis"
            value={this.state.hypothesis}
            onChange={this.handleInputChange}
            disabled={this.state.disabled || this.props.ruleStated}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Numbers:</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control required type="text"
                            name={'number1'}
                            value={this.state.number1}
                            onChange={this.handleInputChange}
                            disabled={this.state.disabled || this.props.ruleStated}/>
            </Col>
            <Col>
              <Form.Control required type="text"
                            name={'number2'}
                            value={this.state.number2}
                            onChange={this.handleInputChange}
                            disabled={this.state.disabled || this.props.ruleStated}/>
            </Col>
            <Col>
              <Form.Control required type="text"
                            name={'number3'}
                            value={this.state.number3}
                            onChange={this.handleInputChange}
                            disabled={this.state.disabled || this.props.ruleStated}/>
            </Col>
            <Col>
              <Button variant="primary" type="submit" disabled={this.state.disabled || this.props.ruleStated}>
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Alert variant={this.state.feedbackVariant}>
            {this.state.feedback}
          </Alert>
        </Form.Group>
      </Form>
    )
  }
}

export default Guess


