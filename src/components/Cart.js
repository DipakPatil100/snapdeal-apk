import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Cart = ({ cartItems, qunatityInc, handleRemoveProducts }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + parseInt(item.quantity) * parseInt(item.price),
    0
  );
  console.log("Total", totalPrice);
  // const GST = totalPrice + totalPrice * (18 / 100);

  let localData = JSON.parse(localStorage.getItem("data"));
  // console.log(typeof localData);

  const CARDDATA = cartItems.map((item, idx) => {
    return (
      <div key={idx} id={item.id} className={`cart-item-list `}>
        <div className="itemDetail">
          <img className="cart-item-image" src={item.image} alt={item.name} />
          <div className="cart-item-name">{item.name}</div>
        </div>

        <div className="cart-item-price">Rs. {item.price}</div>
        <div className="cart-items-function">
          <span className="class-item-add" onClick={() => qunatityInc(item)}>
            +
          </span>
          <div className="cart-item-quantity">{item.quantity}</div>
          <span
            className="class-item-remove"
            onClick={() => handleRemoveProducts(item)}
          >
            -
          </span>
        </div>
        <button className="Remove" onClick={() => handleRemoveProducts(item)}>
          REMOVE
        </button>

        <div className="cart-total-price">Rs. {item.price * item.quantity}</div>
      </div>
    );
  });

  return (
    <>
      <div className="navwrap">
        <Navbar cartItems={cartItems} />
      </div>

      <div className={`cart-con `}>
        {/* <span className="cart-item-header">Shopping Cart</span> */}

        {cartItems.length === 0 ? (
          <div className="cart-items-empty">
            <p>Shopping Cart is empty!</p>
            <Link to="/">
              <button>START SHOPPING NOW</button>
            </Link>
          </div>
        ) : (
          <div className={`cart-container`}>
            <h3>Shopping Cart ({cartItems.length} Item)</h3>
            <div>
              <tr className="cart-row">
                <th>Item Details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
                <th>Subtotal</th>
              </tr>
              {CARDDATA}
            </div>
          </div>
        )}
        {cartItems.length !== 0 && (
          <div className="FinalTotla">
            <div className="cart-total-price-name">
              <span className="total-price">
                Sub Total: <span> Rs.{totalPrice}</span>
                {localStorage.setItem("subTotal", totalPrice)}
              </span>
              <span className="dCharge">
                Delivery Charges:
                <span>FREE</span>
              </span>
            </div>

            <div className="checkout">
              {cartItems.length >= 1 && (
                <Link to="/payment">
                  <button className=" buybtn">
                    PROCEED TO PAY RS. {totalPrice}
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};
