import React, { Component } from 'react';
import { Form, Stack } from 'react-bootstrap';

class RestaurantSearch extends Component {

    constructor() {
        super();
        this.state = {
            searchData: "",
            noData: false
        }
    }

    searchRestaurant(key) {
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

    render() {
        return (
            <div>
                <h1>Search a Restaurant</h1>

                <Form>
                    <Form.Group className="mb-3 m-4">
                        <Form.Control type="text" placeholder="Search for Restaurant / City / Rating....."
                            // value={this.state.name}
                            onChange={(event) => { this.searchRestaurant(event.target.value) }}
                        />
                    </Form.Group>

                    {/* <Button variant="primary" className='m-4'
                        onClick={() => { this.searchRestaurant() }}>
                        Search
                    </Button> */}
                </Form>

                <div>
                    {
                        this.state.noData
                            ? <div><h3>Sorry! No Data Has Found On Your Search</h3></div>
                            : this.state.searchData
                                ? <div>
                                    {
                                        this.state.searchData.map((item) =>
                                            <Stack direction="horizontal" gap={3}>
                                                <div className="bg-light border">{item.name}</div>
                                            </Stack>
                                        )}
                                </div>
                                : ""
                    }
                </div>
            </div>
        )
    }
}

export default RestaurantSearch;
