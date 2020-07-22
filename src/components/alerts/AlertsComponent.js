import React from 'react';

import './AlertsComponent.css';

import weather from '../../data/weather.json';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from 'react-bootstrap/ListGroup';

class AlertsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            validEmail: true,
            validPhoneNumber: true,
            locations: [],
            email: "",
            phone: ""
        };
    }

    getStep = () => {
        return this.state.step;
    };

    getCities = () => {
        const res = [];
        Object.keys(weather).forEach( (continent) => {
            Object.keys(weather[continent]).forEach( (country) => {
                Object.keys(weather[continent][country]).forEach( (city) => {
                    res.push(city);
                } );
            } );
        } );
        return res;
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
                step: nextStep,
                validEmail: !(nextStep === 2),
                validPhoneNumber: !(nextStep === 2)
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
                step: nextStep,
                validEmail: !(nextStep === 2),
                validPhoneNumber: !(nextStep === 2)
            }
        });
    };

    cancel = () => {
        this.setState({step: 1});
    };

    addLocation = (newCity) => {
        this.setState((prevState) => {
            if (!prevState.locations.includes(newCity)) {
                const l = JSON.parse(JSON.stringify(prevState.locations));
                l.push(newCity);
                return {
                    locations: l
                }
            }
        });
    };

    removeLocation = (city) => {
        this.setState((prevState) => {
            if (prevState.locations.includes(city)) {
                const l = JSON.parse(JSON.stringify(prevState.locations));
                const final = l.filter((e) => {
                    return e !== city
                });
                return {
                    locations: final
                }
            }
        });
    };

    render() {
        return (
            <div className="another-component page">
                <Container fluid>
                    <ProgressBar now={33 * this.state.step + ((this.state.step === 3) ? (1) : (0))} />
                    <br></br>
                    {
                        (this.getStep() === 1) ? (
                            <Card>
                                <Card.Title style={{ padding: "1em" }} >Locations</Card.Title>
                                <Card.Body>
                                    <Form>
                                        <Form.Group controlId="step1fg">
                                            <Form.Label>Select cities</Form.Label>
                                            <Form.Control onChange={(e) => {this.addLocation(e.target.value)}} as="select" multiple>
                                                {
                                                    this.getCities().map((city) => {
                                                        return <option> {city} </option>
                                                    })
                                                }
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                    <ListGroup>
                                        {
                                            this.state.locations.map((city) => {
                                                return <ListGroup.Item key={city} > {city} <i style={{marginLeft: "1em"}} className="fas fa-trash" onClick={() => {this.removeLocation(city)}} ></i> </ListGroup.Item>
                                            })
                                        }
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ) : (null)
                    }
                    {
                        (this.getStep() === 2) ? (
                            <Card>
                                <Card.Title style={{ padding: "1em" }} >Contact information</Card.Title>
                                <Card.Body>
                                    <Form>
                                        <Form.Group controlId="step1fg">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control onChange={(e) => {this.setState({validEmail: e.target.validity.valid, email: e.target.value})}} required type="email"></Form.Control>
                                            <Form.Label>Phone#</Form.Label>
                                            <Form.Control onChange={(e) => {this.setState({validPhoneNumber: e.target.validity.valid, phone: e.target.value})}} pattern="^[0-9]+$" required type="tel"></Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        ) : (null)
                    }
                    {
                        (this.getStep() === 3) ? (
                            <Card>
                                <Card.Title style={{ padding: "1em" }} >Confirm</Card.Title>
                                <Card.Body>
                                    <Card.Subtitle>Locations</Card.Subtitle>
                                    <br></br>
                                    <ListGroup>
                                        {
                                            this.state.locations.map((city) => {
                                                return <ListGroup.Item key={city} > {city} </ListGroup.Item>
                                            })
                                        }
                                    </ListGroup>
                                    <br></br><br></br>
                                    <Card.Subtitle>Contact info</Card.Subtitle>
                                    <br></br>
                                    <Card.Text><strong>Email:</strong> {this.state.email} </Card.Text>
                                    <Card.Text><strong>Phone:</strong> {this.state.phone} </Card.Text>
                                    <br></br><br></br>
                                    <Button>
                                        <Link style={{color: "white", textDecoration: "none"}} to="/" >Confirm</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        ) : (null)
                    }
                    <Row>
                        <Button onClick={() => {this.cancel()}} className="button" >Cancel</Button>
                        <Button disabled={this.getStep() === 1} onClick={() => {this.back()}} className="button" >Back</Button>
                        <Button disabled={this.getStep() === 3 || !(this.state.validEmail && this.state.validPhoneNumber)} onClick={() => {this.next()}} className="button" >Next</Button>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default AlertsComponent;
