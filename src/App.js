import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import { Payment } from "./components/Payment";

function App() {
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems);
  const qunatityInc = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleAddProucts = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  let data = JSON.parse(localStorage.getItem("data"));
  if (data) {
    localStorage.setItem("data", JSON.stringify([...cartItems, ...data]));
  } else {
    localStorage.setItem("data", JSON.stringify(cartItems));
  }

  const handleRemoveProducts = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home handleAddProucts={handleAddProucts} cartItems={cartItems} />
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                qunatityInc={qunatityInc}
                handleRemoveProducts={handleRemoveProducts}
              />
            }
          />
          <Route
            exact
            path="/payment"
            element={<Payment setCartItems={setCartItems} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
