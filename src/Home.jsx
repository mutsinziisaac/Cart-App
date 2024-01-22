import { useState, useEffect } from "react";
import "./home.css";

export default function Home({ cart, setCart }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  function handleAddToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }
  console.log(cart);
  return (
    <>
      <div className="container">
        <h2>
          Your one-stop destination for all your <br />
          tech needs
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Odio
          tempore cum, quis nihil accusantium itaque!
        </p>
        <button className="shopBtn">SHOP NOW</button>
      </div>
      <div className="items">
        <div className="item">
          {products && products.length > 0 && (
            <img src={products[3].image} alt="text" />
          )}
          <button onClick={() => handleAddToCart(products[3])}>
            ADD TO CART
          </button>
        </div>
        <div className="item">
          {products && products.length > 0 && (
            <img src={products[4].image} alt="text" />
          )}
          <button onClick={() => handleAddToCart(products[4])}>
            ADD TO CART
          </button>
        </div>
        <div className="item">
          {products && products.length > 0 && (
            <img src={products[5].image} alt="text" />
          )}
          <button onClick={() => handleAddToCart(products[5])}>
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
}
