import React, { useState } from "react";

import "../styles/patterns/sidebar.scss";

//IMPORTING COMPONENTS

import Link from "../components/link";

//IMPORTING MEDIA ASSETS

import downarrow_white from "../assets/icons/downarrow_white.svg";
import sidebar_close from "../assets/icons/sidebar_close.svg";

const Sidebar = ({ setSidebar }) => {
  //INITIALIZING HOOKS

  const [isDropdown, setIsDropdown] = useState(false);

  const handleClose = () => setSidebar(false);

  //RENDER LINKS
  const renderLinks = (
    <div className="links">
      <Link
        to="/"
        id="home"
        activeClassName="active"
        onClick={() => handleClose()}
      >
        Home
      </Link>
      <Link
        to="/trade"
        id="trade"
        activeClassName="active"
        onClick={() => handleClose()}
      >
        Trade
      </Link>
      <Link
        to="/farms"
        id="farms"
        activeClassName="active"
        onClick={() => handleClose()}
      >
        Farms
      </Link>
      <Link
        to="/pools"
        id="pools"
        activeClassName="active"
        onClick={() => handleClose()}
      >
        Pools
      </Link>
      <Link
        to="/prediction"
        id="prediction"
        activeClassName="active"
        onClick={() => handleClose()}
      >
        Prediction
      </Link>
      <Link
        to="/collectibles"
        id="collectibles"
        activeClassName="active"
        onClick={() => handleClose()}
      >
        Collectibles
      </Link>
      <p onClick={() => setIsDropdown((prevIsdropdown) => !prevIsdropdown)}>
        <span>More</span>
        <img
          src={downarrow_white}
          alt="arrow"
          style={{ width: "14px", height: "14px" }}
        />
      </p>
      <ul className={isDropdown ? "lists active" : "lists"}>
        <li>Get in touch</li>
        <li>Voting</li>
        <li>Documents</li>
        <li>Blogs</li>
        <li>Merchandise</li>
      </ul>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <img
          src={sidebar_close}
          alt="x"
          className="cursor"
          onClick={() => setSidebar(false)}
        />
      </div>
      {renderLinks}
    </div>
  );
};

export default Sidebar;
