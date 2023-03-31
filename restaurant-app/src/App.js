import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantUpdate from "./components/RestaurantUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/details">Details</Link></li>
          <li><Link to="/update">Update</Link></li>

        </ul>
      </div>

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