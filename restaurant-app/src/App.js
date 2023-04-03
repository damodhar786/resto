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
            <Navbar.Brand href="#home">Welcome to Resto</Navbar.Brand>
            <Nav className="me-auto">
                            
              <Link className="nav-link" to="/">Home</Link>
              <Link to="/create" className="nav-link">Create</Link>
              <Link to="/list" className="nav-link">List</Link>
              <Link to="/search" className="nav-link">Search</Link>
              <Link to="/update" className="nav-link">Update</Link>

            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<RestaurantCreate />}></Route>
          <Route path="/list" element={<RestaurantList />}></Route>
          <Route path="/search" element={<RestaurantSearch />}></Route>
          <Route path="/details" element={<RestaurantDetail />}></Route>
          <Route path="/update" element={<RestaurantUpdate />}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;