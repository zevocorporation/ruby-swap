import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" />
      <div className="controls">
        <div className="menu">
          <a href="/" id="home">
            Home
          </a>
          <a href="/" id="trade">
            Trade
          </a>
          <a href="/" id="farms">
            Farms
          </a>
          <a href="/" id="pools">
            Pools
          </a>
          <a href="/" id="productions">
            Productions
          </a>
          <a href="/" id="collectibles">
            Collectibles
          </a>
          <a href="/" id="more">
            More
          </a>
        </div>
        <button>connect</button>
        <img className="hamburger" />
      </div>
    </div>
  );
};

export default Header;
