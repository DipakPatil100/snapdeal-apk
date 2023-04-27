import React from "react";
import p1 from "../images/r1.jpeg";
import p2 from "../images/r2.jpeg";
import p3 from "../images/r3.jpg";
import p4 from "../images/r4.jpg";
import p5 from "../images/r5.jpeg";
import p6 from "../images/r6.jpeg";
import p7 from "../images/r7.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RecentP = [
  {
    img: p1,
    title:
      "NBOX Metal Adjustable Mobile Phone Foldable Holder Stand Dock Mount with Big Back Support to Hold ",
    price: 249,
  },
  {
    img: p2,
    title: "Ajanta - Blue Men's Slip-on Shoes ",
    price: 299,
  },
  {
    img: p3,
    title: "NBOX - Multicolor Printed Cover Compatible For Vivo V23 Pro 5G  ",
    price: 199,
  },
  {
    img: p4,
    title: "Happilo Premium Afghani seedless Black Raisins 250g (Pack of 2)",
    price: 309,
  },
  {
    img: p5,
    title: "ASIAN White Men's Sports Running Shoes",
    price: 575,
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const RecentProduct = ({ title }) => {
  return (
    <div className="recentPro">
      <h4>{title}</h4>
      <Carousel responsive={responsive}>
        {/* <div className="proWrap"> */}
        <div className="pro">
          <img src={p1} alt="" />
          <div className="detail">
            <h4>NBOX Metal Adjustable Mobile Phone Foldable Holder</h4>
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <h6>Rs249</h6>
          </div>
        </div>
        <div className="pro">
          <img src={p2} alt="" />
          <div className="detail">
            <h4>Ajanta - Blue Men's Slip-on Shoes (Pack of 2)</h4>
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <h6>Rs299</h6>
          </div>
        </div>
        <div className="pro">
          <img src={p3} alt="" />
          <div className="detail">
            <h4>NBOX - Multicolor Printed Cover Compatible For Vivo</h4>
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <h6>Rs199</h6>
          </div>
        </div>
        <div className="pro">
          <img src={p4} alt="" />
          <div className="detail">
            <h4>Happilo Premium Afghani seedless Black Raisins 250g</h4>
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <h6>Rs309</h6>
          </div>
        </div>
        <div className="pro">
          <img src={p5} alt="" />
          <div className="detail">
            <h4>ASIAN White Men's Sports Running Shoes</h4>
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h6>Rs575 </h6>
          </div>
        </div>
        <div className="pro">
          <img src={p6} alt="" />
          <div className="detail">
            <h4>Bhawna Collection Loard Shiv Trishul Damru Locket</h4>
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h6>Rs156 </h6>
          </div>
        </div>
        <div className="pro">
          <img src={p7} alt="" />
          <div className="detail">
            <h4>Fire-Boltt - Ninja Call 2 Green Smart Watch</h4>
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h6>Rs2499</h6>
          </div>
        </div>
        {/* </div> */}
      </Carousel>
    </div>
  );
};
