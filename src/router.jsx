import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Cart from "./cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home cart={cart} handleAddToCart={handleAddToCart} />
        </Route>
        <Route path="/cart">
          <Cart cart={cart} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
