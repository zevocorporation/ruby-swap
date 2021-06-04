import React, { useState } from "react";

//IMPORTING STYLESHEET

import "../../styles/patterns/trade.scss";

//IMPORTING COMPONENTS

import Button from "../../components/button";

//IMPORTING MEDIA ASSETS

import learn_more from "../../assets/icons/learn_more.svg";
import settings from "../../assets/icons/settings.svg";
import clock from "../../assets/icons/clock.svg";
import checkbox from "../../assets/icons/checkbox.svg";
import checkbox_square from "../../assets/icons/checkbox_square.svg";
import help_circle from "../../assets/icons/help_circle.svg";

const ViLiquidity = () => {
  //INITIALIZING HOOKS

  const [swapCheckbox, setSwapCheckbox] = useState(false);
  const [liquidityCheckbox, setLiquidityCheckbox] = useState(false);
  const [bridgeCheckbox, setBridgeCheckbox] = useState(false);

  //RENDER TRADE HEADER

  const renderHeader = (
    <div className="trade_title">
      <div>
        <p className="text_regular_24_w600">Liquidity</p>
        <p className="text_regular_14_o7">Add liquidity to receive LP tokens</p>
      </div>
      <div>
        <img src={settings} alt="settings" />
        <img src={clock} alt="clock" />
      </div>
    </div>
  );

  //RENDER CONTENT

  const renderContent = (
    <div style={{ marginTop: "1.5em" }}>
      <p className="text_regular_14_o7">
        Don't see a pool you joined?{" "}
        <span style={{ color: "#ec1654" }}>Import</span> it.
      </p>
      <p className="text_regular_14_o7" style={{ marginTop: "1.5em" }}>
        Or, if you staked your LP tokens in a farm, unstake them to see them
        here.
      </p>
    </div>
  );

  const renderStats = (
    <div className="trade_graph">
      <div>
        <p>
          <span className="text_regular_16_w500">Your Liquidity</span>
          <img src={help_circle} alt="help" />
        </p>
        <p className="text_regular_20_w500">$25</p>
      </div>
    </div>
  );

  //RENDER VL LIQUIDITY COMPONENTS

  const renderExchangPattern = (
    <div>
      {renderHeader}
      <Button
        className="btn-primary"
        style={{ marginTop: "1.5em", padding: "0.5em 3em" }}
      >
        Add Liquidity
      </Button>
      {renderStats}
      {renderContent}
    </div>
  );

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
            {swapCheckbox ? (
              <img
                src={checkbox_square}
                alt="checkbox"
                onClick={() => setSwapCheckbox(false)}
              />
            ) : (
              <img
                src={checkbox}
                alt="checkbox"
                onClick={() => setSwapCheckbox(true)}
              />
            )}
          </li>
          <li>
            <span>Liquidity</span>
            {liquidityCheckbox ? (
              <img
                src={checkbox_square}
                alt="checkbox"
                onClick={() => setLiquidityCheckbox(false)}
              />
            ) : (
              <img
                src={checkbox}
                alt="checkbox"
                onClick={() => setLiquidityCheckbox(true)}
              />
            )}
          </li>
          <li>
            <span>Bridge</span>
            {bridgeCheckbox ? (
              <img
                src={checkbox_square}
                alt="checkbox"
                onClick={() => setBridgeCheckbox(false)}
              />
            ) : (
              <img
                src={checkbox}
                alt="checkbox"
                onClick={() => setBridgeCheckbox(true)}
              />
            )}
          </li>
        </ul>
      </div>
      <div
        className="primary_gradient_bg trade_details"
        style={{ marginTop: "1.25em" }}
      >
        <p className="text_regular_16_w500">What is Liquidity?</p>
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

export default ViLiquidity;
