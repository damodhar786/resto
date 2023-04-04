import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class RestaurantUpdate extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            address: "",
            rating: "",
            id: window.location.href.split('/')[4]
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/restuarant/' + this.state.id).then((response) => {
            response.json().then((result) => {
                this.setState({
                    name: result.name,
                    email: result.email,
                    rating: result.rating,
                    address: result.address,
                    id: result.id
                })
            })
        })
    }

    updateRestaurant() {
        fetch("http://localhost:5000/restuarant/" + this.state.id, {
            method: 'put',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            result.json().then((response) => {
                console.log("Updated Selected Restaurant's Data: ", response);
                alert("Updated Selected Restaurant's Data");
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
                <h1>Update Restaurant Details</h1>

                <Form>
                    <Form.Group className="mb-3 m-4" controlId="formBasicEmail">
                        <Form.Label>Restaurant Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter a Restaurant's name"
                            value={this.state.name}
                            onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </Form.Group>

                    <Form.Group className="mb-3 m-4" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Restaurant's email"
                            value={this.state.email}
                            onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </Form.Group>

                    <Form.Group className="mb-3 m-4" controlId="formBasicEmail">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="text" placeholder="Enter Rating of the restaurant"
                            value={this.state.rating}
                            onChange={(e) => { this.setState({ rating: e.target.value }) }} />
                    </Form.Group>

                    <Form.Group className="mb-3 m-4" controlId="formBasicEmail">
                        <Form.Label>Restaurant Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter a Restaurant's name"
                            value={this.state.address}
                            onChange={(e) => { this.setState({ address: e.target.value }) }} />
                    </Form.Group>

                    <Button variant="primary" className='m-4'
                        onClick={() => { this.updateRestaurant() }}>
                        Update Restaurant
                    </Button>
                </Form>
            </div>
        )
    }
}
export default RestaurantUpdate;