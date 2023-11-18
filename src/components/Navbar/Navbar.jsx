import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <div className="nav_logo">
        <img src={Logo} alt="" />
      </div>
      <div className="nav_lists">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/product">
              Product <FaCaretDown />
            </a>
          </li>
        </ul>
      </div>
      <div className="search_cart">
        <CiSearch />
        <FaShoppingCart />
      </div>
    </nav>
  );
}

export default Navbar;
