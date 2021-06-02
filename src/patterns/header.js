import React, { useState } from "react";
import "../styles/patterns/header.scss";

//IMPORTING COMPONENTS

import Link from "../components/link";

//IMPORTING MEDIA ASSETS

import logo from "../assets/logo/logo.svg";

const Header = () => {
  //INITIALIZING HOOKS

  const [offWidth, setOffWidth] = useState(0);
  const [offLeft, setOffLeft] = useState(0);

  //HANDLING METHODS

  const handleClick = (e) => {
    setOffWidth(e.offsetWidth);
    setOffLeft(e.offsetLeft);
  };

  //RENDER CONTROLS

  const renderControls = (
    <div className="controls">
      <div className="menu">
        <Link
          to="/"
          id="home"
          activeClassName="active"
          onClick={(e) => handleClick(e.target)}
        >
          Home
        </Link>
        <Link
          to="/trade"
          id="trade"
          activeClassName="active"
          onClick={(e) => handleClick(e.target)}
        >
          Trade
        </Link>
        <Link
          to="/farms"
          id="farms"
          activeClassName="active"
          onClick={(e) => handleClick(e.target)}
        >
          Farms
        </Link>
        <Link
          to="/pools"
          id="pools"
          activeClassName="active"
          onClick={(e) => handleClick(e.target)}
        >
          Pools
        </Link>
        <Link
          to="/productions"
          id="productions"
          activeClassName="active"
          onClick={(e) => handleClick(e.target)}
        >
          Productions
        </Link>
        <Link
          to="/collectibles"
          id="collectibles"
          activeClassName="active"
          onClick={(e) => handleClick(e.target)}
        >
          Collectibles
        </Link>
      </div>
      <button>connect wallet</button>
    </div>
  );

  const renderHeader = (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      {renderControls}
      <p className="offset_line" style={{ width: offWidth, left: offLeft }}></p>
    </div>
  );

  return (
    <>
      {renderHeader}
      <p className="line"></p>
    </>
  );
};

export default Header;
