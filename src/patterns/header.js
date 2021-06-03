import React from "react";
import Web3 from "web3";
import { useSelector, useDispatch } from "react-redux";

//IMPORTING STYLESHEET

import "../styles/patterns/header.scss";

//IMPORTING PATTERNS

import Modal from "./modals/modal";

//IMPORTING COMPONENTS

import Link from "../components/link";
import Button from "../components/button";

//IMPORTING MEDIA ASSETS

import logo from "../assets/logo/logo.svg";
import profile from "../assets/icons/profile.svg";
import down_arrow from "../assets/icons/down_arrow.svg";

import * as actionType from "../redux/constants/actionsTypes";

export const balance = async (address) => {
  const balance1 = await window.web3.eth.getBalance(address);
  const balance2 = Web3.utils.fromWei(balance1, "ether");

  return balance2;
};

const Header = () => {
  //INITIALIZING HOOKS
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //HANDLING METHODS

  const connect = async () => {
    dispatch({
      type: actionType.START_LOADING,
    });
    // CONNECTING METAMASK WALLET
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        // await window.ethereum.enable()

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const res = await balance(window.ethereum.selectedAddress);
        localStorage.setItem(
          "user_id",
          JSON.stringify(window.ethereum.selectedAddress)
        );

        dispatch({
          type: actionType.CONNECT,
          payload: {
            address: Web3.utils.toChecksumAddress(accounts[0]),
            balance: res,
          },
        });
        dispatch({
          type: actionType.STOP_LOADING,
        });
      }
      if (window.ethereum === undefined) {
        dispatch({
          type: actionType.STOP_LOADING,
        });
        alert("Install metamask");
      }
    } catch (err) {
      dispatch({
        type: actionType.STOP_LOADING,
      });
      console.log(err);
    }
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
      <Link to="/productions" id="productions" activeClassName="active">
        Productions
      </Link>
      <Link to="/collectibles" id="collectibles" activeClassName="active">
        Collectibles
      </Link>
    </>
  );

  //RENDER CONTROLS

  const renderControls = (
    <div className="controls">
      <div className="menu">{renderLinks}</div>
      <Button onClick={user?.isConnected ? null : () => connect()}>
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
        <img src={profile} alt="profile" style={{ marginLeft: "5px" }} />
      )}
    </div>
  );

  const renderHeader = (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      {renderControls}
    </div>
  );

  return (
    <>
      {renderHeader}
      <p className="line"></p>
      <Modal variant="switchToDesktop" />
    </>
  );
};

export default Header;
