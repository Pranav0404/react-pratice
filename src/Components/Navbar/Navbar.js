import React, { useState } from "react";
import { Link, Routes } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="Navbar">
      <ul className="NavBar__divs centerList">
        <Link className="Navbar__centerLists Navbar__Lists homeList" to="/">
          Home
        </Link>
        <Link className="Navbar__centerLists Navbar__Lists" to="allProducts">
          Collections
        </Link>
        <Link className="Navbar__centerLists Navbar__Lists" to="customProducts">
          About Us
        </Link>
        {/* <li className="Navbar__MenuIcon">
          <MenuIcon onClick={showSidebar} />
        </li> */}
      </ul>
      {/* <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <ClearIcon />
          </li>
        </ul>
      </nav> */}
    </div>
  );
}
