import React, { useState } from "react";
import { useSelector } from "react-redux";
//IMPORTING STYLESHEET

import "../styles/patterns/sidebar.scss";

//IMPORTING COMPONENTS

import Link from "../components/link";
import Button from "../components/button";

//IMPORTING MEDIA ASSETS

import downarrow_white from "../assets/icons/downarrow_white.svg";
import sidebar_close from "../assets/icons/sidebar_close.svg";
import profile from "../assets/icons/profile.svg";
import down_arrow from "../assets/icons/down_arrow.svg";

const Sidebar = ({ setSidebar, setConnectWalletModal }) => {
  //INITIALIZING HOOKS

  const [isDropdown, setIsDropdown] = useState(false);
  const user = useSelector((state) => state.user);

  const handleClose = () => setSidebar(false);

  const handleModal = () => {
    setSidebar(false);
    setConnectWalletModal(true);
  };

  //RENDER BUTTON

  const renderButton = (
    <>
      <Button
        onClick={user?.isConnected ? null : () => handleModal()}
        style={{ pointerEvents: user?.isLoading && "none" }}
      >
        <span>
          {user?.isLoading
            ? "Loading..."
            : user?.isConnected
            ? `${user?.address?.slice(0, 5)}...${user?.address?.slice(
                user?.address?.length - 5
              )}`
            : "connect wallet"}
        </span>
        {user?.isConnected && <img src={down_arrow} alt="down_arrow" />}
      </Button>
      {user?.isConnected && (
        <img
          src={profile}
          alt="profile"
          style={{ marginLeft: "5px" }}
          className="profile_img"
        />
      )}
    </>
  );

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
        {renderButton}
        <img
          src={sidebar_close}
          alt="x"
          className="cursor close_icon"
          onClick={() => setSidebar(false)}
        />
      </div>
      {renderLinks}
    </div>
  );
};

export default Sidebar;
