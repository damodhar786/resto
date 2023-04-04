import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantUpdate from "./components/RestaurantUpdate";
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to="/" className="resto" style={{ color: "white", fontFamily: "cursive", fontSize: "18px", textDecoration: "none", margin: "5px" }}>Resto</Link>

            <Nav className="me-auto">

              <Link className="nav-link" to="/"><i className="fa-solid fa-house-chimney"></i> Home</Link>
              <Link to="/create" className="nav-link"><i className="fa-solid fa-plus"></i> Add a Resto</Link>
              <Link to="/list" className="nav-link"><i className="fa-solid fa-list"></i> Resto Directory</Link>
              <Link to="/search" className="nav-link"><i className="fa-solid fa-magnifying-glass"></i> Search a Resto</Link>
              {/* <Link to="/update" className="nav-link">Update</Link> */}

            </Nav>
          </Container>
        </Navbar>

        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<RestaurantCreate />}></Route>
          <Route path="/list" element={<RestaurantList />}></Route>
          <Route path="/search" element={<RestaurantSearch />}></Route>
          <Route path="/details" element={<RestaurantDetail />}></Route>
          <Route path="/update/:id" Component={props => (
            < RestaurantUpdate {...props} />
          )}></Route>

        </Routes>

      </BrowserRouter>

    </div >
  );
}

export default App;