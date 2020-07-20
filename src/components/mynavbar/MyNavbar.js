import React from 'react';

import './MyNavbar.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

class MyNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            q: ""
        };
    }

    render() {
        return (
            <div>
                <Navbar className="my-navbar" fixed="top" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Col><Link style={{color: "white", textDecoration: "none"}} className="link" to="explore">Explore</Link></Col>
                        <Col><Link style={{color: "white", textDecoration: "none"}} className="link" to="alerts">Alerts</Link></Col>
                        <Col>
                            <Link style={{color: "white", textDecoration: "none"}} className="link" to="help">
                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                            </Link>
                        </Col>
                        </Nav>
                        <Form inline>
                            <Form.Group controlId="searchForm" >
                                <Form.Control onChange={(e) => {this.setState({q: e.target.value})}} type="text" placeholder="Search for cities" />
                            </Form.Group>
                            <Link style={{color: "white", textDecoration: "none"}} className="link" to={{
                                    pathname: "search",
                                    city: this.state.q
                                }} >
                                    <Button className="search-button" ><i className="fas fa-search"></i></Button>
                            </Link>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}

export default MyNavbar;
