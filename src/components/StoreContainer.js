import { useState, useEffect } from "react";
import Store from "./Store";
import Cart from "./Cart";
import Summary from "./Summary";

function StoreContainer() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setItems(result);
  }

  function addItemToCart(item) {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
  }

  return (
    <div>
      <Store
        items={items}
        index={index}
        setIndex={setIndex}
        addItemToCart={addItemToCart}
      />
      <Cart cart={cart} />
      <Summary cart={cart} />
    </div>
  );
}

export default StoreContainer;
