import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
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

  deleteResto(id) {
    console.log("id", id)
    fetch("http://localhost:5000/restuarant/" + id,{
      method: "delete",
      headers:{
        'Content-Type' : 'application/json'
      }, 
    }).then((result) =>{
      result.json().then((response) =>{
        console.log("Selected Restaurant's data has been deleted", response);
        alert("Selected Restaurant's data has been deleted");
        this.componentDidMount();
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Restaurants</h1>

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
                    <th>Edit</th>
                    <th>Delete</th>
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
                        <td>
                          <Link to={"/update/" + item.id} className="nav-link"><i className="fa-solid fa-pen" ></i></Link>
                        </td>
                        <td>
                          <i
                            className="fa-solid fa-trash"
                            style={{ cursor: "pointer"}}
                            onClick={() => this.deleteResto(item.id)}
                          ></i>
                        </td>
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