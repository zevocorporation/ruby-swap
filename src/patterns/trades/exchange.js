import React from "react";

//IMPORTING STYLESHEET

import "../../styles/patterns/trade.scss";

//IMPORTING COMPONENTS

import Button from "../../components/button";

//IMPORTING MEDIA ASSETS

import learn_more from "../../assets/icons/learn_more.svg";
import downarrow_white from "../../assets/icons/downarrow_white.svg";
import settings from "../../assets/icons/settings.svg";
import clock from "../../assets/icons/clock.svg";
import binance from "../../assets/icons/binance.svg";
import checkbox from "../../assets/icons/checkbox.svg";
import checkbox_square from "../../assets/icons/checkbox_square.svg";

const Exchange = () => {
  //RENDER TRADE HEADER

  const renderHeader = (
    <div className="trade_title">
      <div>
        <p className="text_regular_24_w600">Exchange</p>
        <p className="text_regular_14_o7">Trade tokens in an instant</p>
      </div>
      <div>
        <img src={settings} alt="settings" />
        <img src={clock} alt="clock" />
      </div>
    </div>
  );

  //RENDER INPUT FIELD

  const renderInput = (
    <>
      <div className="exchange_trade_input">
        <p className="text_regular_14">Input</p>
        <div>
          <input
            type="number"
            value="0.00"
            className="text_regular_20_w500"
            readOnly
          />
          <div>
            <img
              src={binance}
              alt="binance"
              style={{ width: "1.25em", marginRight: "0.5em" }}
            />
            <span className="text_regular_14_w500">Binance</span>
            <img
              src={downarrow_white}
              alt="down_arrow"
              style={{ marginLeft: "0.5em" }}
            />
          </div>
        </div>
      </div>
      <div className="exchange_trade_input">
        <p className="text_regular_14">Output (estimated)</p>
        <div>
          <input
            type="number"
            value="0.00"
            className="text_regular_20_w500"
            readOnly
          />
          <div>
            <img
              src={binance}
              alt="binance"
              style={{ width: "1.25em", marginRight: "0.5em" }}
            />
            <span className="text_regular_14_w500">Binance</span>
            <img
              src={downarrow_white}
              alt="down_arrow"
              style={{ marginLeft: "0.5em" }}
            />
          </div>
        </div>
      </div>
    </>
  );

  //RENDER BUTTON

  const renderButton = (
    <div className="btn_block">
      <Button className="btn-primary">Unlock Wallet</Button>
      <p className="text_regular_12_o7">Slippage Tolerance 0.1 %</p>
    </div>
  );

  //RENDER EXCHANGE COMPONENTS

  const renderExchangPattern = (
    <div>
      {renderHeader}
      {renderInput}
      {renderButton}
    </div>
  );

  //RENDER TRADE DETAILS

  const renderTradeDetails = (
    <div className="trade_type">
      <div className="primary_gradient_bg trade_stats">
        <p className="text_regular_16_w500">Select your Trade type </p>
        <p className="text_regular_12_o7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
          porttitor est quam netus egestas aliquam adipiscing elit.
        </p>
        <ul>
          <li>
            <span>Swap</span>
            <img src={checkbox} alt="checkbox" />
          </li>
          <li>
            <span>Liquidity</span>
            <img src={checkbox} alt="checkbox" />
          </li>
          <li>
            <span>Bridge</span>
            <img src={checkbox_square} alt="checkbox" />
          </li>
        </ul>
      </div>
      <div
        className="primary_gradient_bg trade_details"
        style={{ marginTop: "1.25em" }}
      >
        <p className="text_regular_16_w500">What is Swap Exchange?</p>
        <p className="text_regular_12_o7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
          porttitor est quam netus egestas aliquam adipiscing elit.
        </p>
        <p className="flex">
          <span className="text_regular_14_o7">Learn more</span>
          <img src={learn_more} alt="learn_more" />
        </p>
      </div>
    </div>
  );

  return (
    <>
      {renderExchangPattern}
      {renderTradeDetails}
    </>
  );
};

export default Exchange;
