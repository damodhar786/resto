import React, { Component } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RestaurantSearch extends Component {

    constructor() {
        super();
        this.state = {
            searchData: "",
            noData: false,
            lastSelectedId: ""
        }
    }

    searchRestaurant(key) {
        this.setState({
            lastSelectedId: key
        })
        if (key) {
            fetch('http://localhost:5000/restuarant?q=' + key).then((result) => {
                result.json().then((response) => {
                    console.log('Search Data: ', response);
                    if (response.length > 0) {
                        this.setState({
                            searchData: response,
                            noData: false
                        });
                    } else {
                        this.setState({
                            searchData: "",
                            noData: true
                        })
                    }
                })
            })
        } else {
            this.setState({
                searchData: "",
                noData: false
            })
        }
    }

    deleteResto(id) {
        fetch("http://localhost:5000/restuarant/" + id, {
            method: "delete",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((result) => {
            result.json().then((response) => {
                console.log("Selected Restaurant's data has been deleted", response);
                alert("Selected Restaurant's data has been deleted");
                this.searchRestaurant(this.state.lastSelectedId);
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Search Restaurants</h1>

                <Container>
                    <Form>
                        <Form.Group className="mb-3 m-4">
                            <Form.Control type="text" placeholder="Search for Restaurant / City / Rating....."
                                // value={this.state.name}
                                onChange={(event) => { this.searchRestaurant(event.target.value) }}
                            />
                        </Form.Group>
                    </Form>

                    <div>

                        {
                            this.state.noData
                            ? <div><h3>Sorry! No Data Has Found On Your Search</h3></div>
                            : this.state.searchData
                                ? <div>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Restaurant Name</th>
                                                <th>Rating</th>
                                                <th>Location</th>
                                                <th>Contact</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        {
                                            this.state.searchData.map((item) =>
                                                <tbody>
                                                    <tr>
                                                        <td>{item.name}</td>
                                                        <td>{item.rating}</td>
                                                        <td>{item.address}</td>
                                                        <td> {item.email}</td>
                                                        <td>
                                                            <Link to={"/update/" + item.id} className="nav-link"><i className="fa-solid fa-pen" ></i></Link>
                                                        </td>
                                                        <td>
                                                            <i
                                                                className="fa-solid fa-trash"
                                                                style={{ cursor: "pointer" }}
                                                                onClick={() => this.deleteResto(item.id)}
                                                            ></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )}
                                    </Table>
                                </div>
                                : ""
                        }
                    </div>
                </Container >


            </div >
        )
    }
}

export default RestaurantSearch;
