import React, { Component } from 'react';

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
              {
                this.state.list.map((item) =>
                  <div>
                    {item.name}
                    {item.address}
                    {item.rating}
                    {item.email}
                  </div>)

              }
            </div>
            : <p>Please Wait.....</p>
        }
      </div>
    )
  }
}

export default RestaurantList;