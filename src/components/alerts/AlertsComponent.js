import React from 'react';

import './AlertsComponent.css';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class AlertsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1
        };
    }

    getStep = () => {
        return this.state.step;
    };

    next = () => {
        this.setState( (prevState) => {
            let nextStep;
            if (prevState["step"] === 3) {
                nextStep = 3;
            } else {
                nextStep = prevState["step"] + 1;
            }
            return {
                step: nextStep
            }
        });
    };

    back = () => {
        this.setState( (prevState) => {
            let nextStep;
            if (prevState["step"] === 1) {
                nextStep = 1;
            } else {
                nextStep = prevState["step"] - 1;
            }
            return {
                step: nextStep
            }
        });
    };

    cancel = () => {
        this.setState({step: 1});
    };

    render() {
        return (
            <div className="another-component page">
                <Container fluid>
                    <Row>
                        <Col>
                        {
                            (this.getStep() === 1) ? (<strong> Locations </strong>) : ("Locations")
                        }
                        </Col>
                        <Col>
                        {
                            (this.getStep() === 2) ? (<strong> Contact info </strong>) : ("Contact info")
                        }
                        </Col>
                        <Col>
                        {
                            (this.getStep() === 3) ? (<strong> Confirm </strong>) : ("Confirm")
                        }
                        </Col>
                    </Row>
                    <br></br>
                    {
                        (this.getStep() === 1) ? (
                            <Card>
                                <Card.Title style={{ padding: "1em" }} >Location step</Card.Title>
                                <Card.Body>
                                    <Form>
                                        <Form.Group controlId="step1fg">
                                            <Form.Label>Seclect cities</Form.Label>
                                            <Form.Control as="select" multiple>
                                                <option>Ottawa</option>
                                                <option>Montreal</option>
                                                <option>Toronto</option>
                                                <option>Vancouver</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        ) : (null)
                    }
                    {
                        (this.getStep() === 2) ? (
                            <Card>
                                <Card.Title style={{ padding: "1em" }} >Contact info step</Card.Title>
                                <Card.Body>
                                    <Form>
                                        <Form.Group controlId="step1fg">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email"></Form.Control>
                                            <Form.Label>Phone#</Form.Label>
                                            <Form.Control type="tel"></Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        ) : (null)
                    }
                    {
                        (this.getStep() === 3) ? (
                            <Card>
                                <Card.Title style={{ padding: "1em" }} >Confirm step</Card.Title>
                                <Card.Body>
                                    <Card.Subtitle>Locations</Card.Subtitle>
                                    <br></br>
                                    <p>Ottawa</p>
                                    <p>Toronto</p>
                                    <br></br><br></br>
                                    <Card.Subtitle>Contact info</Card.Subtitle>
                                    <br></br>
                                    <p>Email: me@example.com</p>
                                    <p>Phone#: 123-456-7890</p>
                                    <br></br><br></br>
                                    <Button>Confirm</Button>
                                </Card.Body>
                            </Card>
                        ) : (null)
                    }
                    <Row>
                        <Button onClick={() => {this.cancel()}} className="button" >Cancel</Button>
                        <Button disabled={this.getStep() === 1} onClick={() => {this.back()}} className="button" >Back</Button>
                        <Button disabled={this.getStep() === 3} onClick={() => {this.next()}} className="button" >Next</Button>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default AlertsComponent;
