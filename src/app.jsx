import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Cart from "./cart";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
}
