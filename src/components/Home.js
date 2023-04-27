import React, { useState } from "react";
import Navbar from "./Navbar";
import QR from "../images/qr.png";
import { Category } from "./Category";
import { Slider } from "./Slider";
import { RecentProduct } from "./RecentProduct";
import { Products } from "./Products";
import { Login } from "./Login/Login";
import banner from "../images/banner.png";
import service from "../images/service.png";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import CardImg from "../images/snapdeal-1.png";

export const Home = ({ handleAddProucts, cartItems }) => {
  return (
    <>
      <div className="home">
        <div className="navwrap">
          <Navbar cartItems={cartItems} />
        </div>

        <div className="homewrap">
          <div className="left">
            <Category />
            <img className="catQr" src={QR} alt="" />
          </div>
          <div className="right">
            <div className="sliderwrap">
              <Slider />
              <div className="card">
                <img src={CardImg} alt="" />
                <p>
                  Enter your pincode to check availability and faster delivery
                  options
                </p>
                <input type="text" placeholder="Enter pincode" />
                <button>SUBMIT</button>
              </div>
            </div>
            <RecentProduct title="TRENDING PRODUCTS" />
          </div>
        </div>

        <div className="products">
          <h4 className="proHead">ALL PRODUCTS</h4>
          <Products handleAddProucts={handleAddProucts} />
        </div>

        <div className="banner">
          <img src={banner} alt="" />
        </div>

        <div className="service">
          <img src={service} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};
