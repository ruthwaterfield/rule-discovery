import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const BeginningObservation = () => (
  <Form>
    <Form.Row>
      <Col>
        <Form.Group controlId="hypothesis">
          <Form.Label>Beginning Observation:</Form.Label>
          <Form.Control
            type="text"
            defaultValue='Beginning Observation'
            disabled={true}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Numbers:</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control required type="text"
                            defaultValue='2'
                            disabled={true}/>
            </Col>
            <Col>
              <Form.Control required type="text"
                            defaultValue='4'
                            disabled={true}/>
            </Col>
            <Col>
              <Form.Control required type="text"
                            defaultValue='6'
                            disabled={true}/></Col>
            <Col>
              <Button variant="primary" type="submit" disabled={true}>
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Feedback:</Form.Label>
          <Alert variant='success'>
            Conforms
          </Alert>
        </Form.Group>
      </Col>
    </Form.Row>
  </Form>
)

export default BeginningObservation

