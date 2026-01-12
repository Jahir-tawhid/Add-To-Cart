import { useState } from "react";
import "./App.css";
import Products from "./components/Products/Products";
import Placement from "./Placement/Placement";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const addToCardData = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="flex gap-x-12">
      <div>
        <Products addToCardData={addToCardData} />
      </div>
      <div>
        <Placement cart={cart} />
      </div>
    </div>
  );
}

export default App;
