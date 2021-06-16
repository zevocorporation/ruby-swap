import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch } from "react-redux";
//IMPORTING STYLESHEET

import "../styles/patterns/header.scss";

//IMPORTING PATTERNS

import Modal from "./modals/modal";
import Sidebar from "./sidebar";
import { balance } from "./modals/modal";

//IMPORTING COMPONENTS

import Link from "../components/link";
import Button from "../components/button";
import * as actionType from "../redux/constants/actionsTypes";
//IMPORTING MEDIA ASSETS

import logo from "../assets/logo/logo.svg";
import profile from "../assets/icons/profile.svg";
import down_arrow from "../assets/icons/down_arrow.svg";
import downarrow_white from "../assets/icons/downarrow_white.svg";
import copy from "../assets/icons/copy.svg";
import external_link from "../assets/icons/external_link.svg";
import edit_user from "../assets/icons/edit_user.svg";
import logout from "../assets/icons/logout.svg";
import chat from "../assets/icons/chat.svg";
import menuIcon from "../assets/icons/menu.svg";

const Header = () => {
  //INITIALIZING HOOKS

  const [accountModal, setAccountModal] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [connectWalletModal, setConnectWalletModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  // const [copied, setCopied] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //HANDLING METHODS

  const handleCopy = () => {
    // setCopied(true);
    // setTimeout(() => {
    //   setCopied(false);
    // }, 3000);
  };

  useEffect(() => {
    if (window.ethereum.selectedAddress !== null) {
      handleReconnect();
    }
  }, []);

  const handleReconnect = async () => {
    dispatch({
      type: actionType.START_LOADING,
    });
    const res = await balance(window.ethereum.selectedAddress);
    dispatch({
      type: actionType.CONNECT,
      payload: {
        address: window.ethereum.selectedAddress,
        balance: res,
      },
    });
    dispatch({
      type: actionType.STOP_LOADING,
    });
  };
  //RENDER LINKS

  const renderLinks = (
    <>
      <Link to="/" id="home" activeClassName="active">
        Home
      </Link>
      <Link to="/trade" id="trade" activeClassName="active">
        Trade
      </Link>
      <Link to="/farms" id="farms" activeClassName="active">
        Farms
      </Link>
      <Link to="/pools" id="pools" activeClassName="active">
        Pools
      </Link>
      <Link to="/prediction" id="prediction" activeClassName="active">
        Prediction
      </Link>
      <Link to="/collectibles" id="collectibles" activeClassName="active">
        Collectibles
      </Link>
    </>
  );

  //RENDER BUTTON

  const renderButton = (
    <>
      <Button
        onClick={
          user?.isConnected
            ? () => setAccountModal((prevAccountModal) => !prevAccountModal)
            : () => setConnectWalletModal(true)
        }
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

  const renderDropdown = (
    <div className={dropdown ? "dropdown_content active" : "dropdown_content"}>
      <span to="/productions">Get in touch</span>
      <span to="/collectibles">Voting</span>
      <span to="/collectibles">Documents</span>
      <span to="/productions">Blogs</span>
      <span to="/collectibles">Merchandise</span>
    </div>
  );

  const renderAccountDropdown = (
    <div className="account_dropdown">
      <div>
        <img
          src={profile}
          alt="profile"
          style={{ width: "50px", height: "50px" }}
        />
        <div>
          <p
            className="text_regular_16_w500"
            style={{ marginBottom: "0.75em" }}
          >
            {user?.address?.slice(0, 4)}...
            {user?.address?.slice(user?.address?.length - 8)}
          </p>
          <div>
            <p>
              <span className="text_regular_12_o7">Copy</span>
              <CopyToClipboard text={user?.address}>
                <img src={copy} alt="copy" onClick={() => handleCopy()} />
              </CopyToClipboard>
            </p>
            <p>
              <span className="text_regular_12_o7">View on BSC</span>
              <img src={external_link} alt="external_link" />
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <p>
        <img src={edit_user} alt="edit_user" />
        <span className="text_regular_14_o7">Edit your profile</span>
      </p>
      <p>
        <img src={chat} alt="chat" />
        <span className="text_regular_14_o7">Help & support</span>
      </p>
      <p>
        <img src={logout} alt="logout" />
        <span className="text_regular_14_o7">Logout</span>
      </p>
    </div>
  );

  //RENDER CONTROLS

  const renderControls = (
    <div className="controls">
      <div className="menu">
        {renderLinks}
        <div className={dropdown ? "dropdown active" : "dropdown"}>
          <p onClick={() => setDropdown((prevDropdowm) => !prevDropdowm)}>
            <span>More</span>
            <img src={downarrow_white} alt="down_arrow" />
          </p>
          {renderDropdown}
        </div>
      </div>
      {renderButton}
      <div
        className="hamburger"
        onClick={() => setSidebar((prevSidebar) => !prevSidebar)}
      >
        <img src={menuIcon} alt="x" />
      </div>
    </div>
  );

  const renderHeader = (
    <>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        {renderControls}
        {accountModal && renderAccountDropdown}
        <p className="line"></p>
      </div>
    </>
  );

  return (
    <>
      {renderHeader}
      {sidebar && (
        <Sidebar
          setSidebar={setSidebar}
          connectWalletModal={connectWalletModal}
          setConnectWalletModal={setConnectWalletModal}
        />
      )}
      <Modal variant="grid" />

      <Modal
        variant="connectWallet"
        isOpenModal={connectWalletModal}
        setIsOpenModal={setConnectWalletModal}
      />

      <div
        className={
          connectWalletModal
            ? "backdrop_transition active"
            : "backdrop_transition"
        }
      ></div>
    </>
  );
};

export default Header;
