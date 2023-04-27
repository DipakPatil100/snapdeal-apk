import React from "react";
import p1 from "../images/r1.jpeg";
import p2 from "../images/r2.jpeg";
import p3 from "../images/r3.jpg";
import p4 from "../images/r4.jpg";
import p5 from "../images/r5.jpeg";
import { data } from "../Data";

// const RecentP = [

//   {
//     img: p1,
//     title:
//       "NBOX Metal Adjustable Mobile Phone Foldable Holder Stand Dock Mount with Big Back Support to Hold ",
//     price: 249,
//   },
//   {
//     img: p2,
//     title: "Ajanta - Blue Men's Slip-on Shoes ",
//     price: 299,
//   },
//   {
//     img: p3,
//     title: "NBOX - Multicolor Printed Cover Compatible For Vivo V23 Pro 5G  ",
//     price: 199,
//   },
//   {
//     img: p4,
//     title: "Happilo Premium Afghani seedless Black Raisins 250g (Pack of 2)",
//     price: 309,
//   },
//   {
//     img: p5,
//     title: "ASIAN White Men's Sports Running Shoes",
//     price: 575,
//   },
// ];

export const Products = ({ handleAddProucts }) => {
  const { pro } = data;
  return (
    <div className="proWrap">
      {pro.map((item, idx) => {
        return (
          <div key={idx} className="pro">
            <img src={item.image} alt="" />
            <div className="detail">
              <h4>{item.name.slice(0, 50)}</h4>
              <div className="star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <h6>Rs{item.price}</h6>
              <button onClick={() => handleAddProucts(item)}>Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
