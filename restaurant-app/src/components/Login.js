import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router-dom';

class Login extends Component {


    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
        }
    }

    login() {
        console.log(this.state);
        fetch('http://localhost:5000/login?q=' + this.state.userName + '&q=' + this.state.password).then((result) => {
            result.json().then((response) => {
                console.log('Login Data: ', response);
                if (response.length > 0) {
                    console.log(this.props);
                    browserHistory.push('/list');
                } else {
                    alert("Invalid User-Name or Password")
                }
            })
        })

        this.setState({
            userName: "",
            password: "",
        })
    }


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
                                        <Form.Control type="email" placeholder="User Name"
                                        value={this.state.userName}
                                        onChange={(event) => { this.setState({ userName: event.target.value }) }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"
                                        value={this.state.password}
                                        onChange={(event) => { this.setState({ password: event.target.value }) }} />
                                    </Form.Group>

                                    <Button variant="primary" onClick={() => { this.login() }}>
                                        Login
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