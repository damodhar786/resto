import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="flex">
                                <h1>Uday </h1><h1 className='gap'>Group of Restaurants</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className="flex">
                                <h3 className='login'>Login</h3>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control type="email" placeholder="User Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}


export default Login;