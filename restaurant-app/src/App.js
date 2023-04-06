import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantUpdate from "./components/RestaurantUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={props => (<Login {...props} />)}></Route>
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