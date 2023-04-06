import React, { Component } from 'react';
import { Form, Button, Container } from "react-bootstrap";

class RestaurantCreate extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            rating: "",
            address: ""
        }
    }

    addRestaurant() {

        // console.log("Added resto", this.state);
        fetch("http://localhost:5000/restuarant", {
            method: 'post',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            result.json().then((response) => {
                console.log("Finally Added resto: ", response);
                alert("Added Restaurant's Data");
                window.location.href = 'list';

            });
        });

        this.setState({
            name: "",
            email: "",
            rating: "",
            address: ""
        });
    }

    render() {
        return (
            <div>
                <h1>Add Restaurant</h1>
                <Container>
                    <Form>
                        <Form.Group className="mb-3 m-4">
                            <Form.Label>Restaurant Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter a Restaurant's name"
                                value={this.state.name}
                                onChange={(e) => { this.setState({ name: e.target.value }) }} />
                        </Form.Group>

                        <Form.Group className="mb-3 m-4">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Restaurant's email"
                                value={this.state.email}
                                onChange={(e) => { this.setState({ email: e.target.value }) }} />
                        </Form.Group>

                        <Form.Group className="mb-3 m-4">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="text" placeholder="Enter Rating of the restaurant"
                                value={this.state.rating}
                                onChange={(e) => { this.setState({ rating: e.target.value }) }} />
                        </Form.Group>

                        <Form.Group className="mb-3 m-4">
                            <Form.Label>Restaurant Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter a Restaurant's name"
                                value={this.state.address}
                                onChange={(e) => { this.setState({ address: e.target.value }) }} />
                        </Form.Group>

                        <Button variant="primary" className='m-4'
                            onClick={() => { this.addRestaurant() }}>
                            Add Restaurant
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default RestaurantCreate;