import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import CustomProducts from "../../Pages/CustomProducts/CustomProducts";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import Cart from '../../Pages/Cart/Cart'
import WishList from '../../Pages/WishList/WishList'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="allProducts" element={<AllProducts />} />
      <Route path="customProducts" element={<CustomProducts />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishList" element={<WishList />} />
    </Routes>
  );
}
