import React, { Component } from 'react';
import { Table } from "react-bootstrap";
class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/restuarant").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result })
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Restaurant List</h1>

        {
          this.state.list ?
            <div>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>Restaurant Name</th>
                    <th>Rating</th>
                    <th>Location</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                {
                  this.state.list.map((item) =>

                    <tbody>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>
                        <td>{item.address}</td>
                        <td> {item.email}</td>
                      </tr>
                    </tbody>
                  )
                }
              </Table>

            </div>
            : <p>Please Wait.....</p>
        }
      </div>
    )
  }
}

export default RestaurantList;