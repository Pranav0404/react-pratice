import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import OffersBar from "../../Components/OffersBar/OffersBar";
import "./AllProducts.css";


export default function Collections() {
  return (
    <div className="Collections">
      <h1 className="Collections__Heading">Inventory</h1>
      <div className="Collection__Categories">
        <div className="Collection__Category">
          <img src='../../../public/Imgs/img1.jpg' />
        </div>
        <div className="Collection__Category">
          <img src="../../../public/Imgs/Collection-Products-Img/hoodie.jpg" />
        </div>
        <div className="Collection__Category">
          <img src="" />
        </div>
        <div className="Collection__Category">
          <img src="" />
        </div>
        <div className="Collection__Category">
          <img src="" />
        </div>
      </div>
    </div>
  );
}
