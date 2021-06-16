import React, { useState } from "react";

//IMPORTING STYLESHEET

import "../styles/screens/tradeScreen.scss";

///IMPORTING TRADE PATTERNS

import {
  Liquidity,
  Exchange,
  ViLiquidity,
  LpMigration,
} from "../patterns/trades";

//IMPORTING MEDIA ASSETS

import learn_more from "../assets/icons/learn_more.svg";
import right_arrow from "../assets/icons/right_arrow.svg";

//Modal

const TradeScreen = () => {
  //INITIALIZING HOOKS

  const [toggleState, setToggleState] = useState(1);

  //HANDLING METHODS

  const handleToggleState = (index) => {
    setToggleState(index);
  };

  //RENDER TRADE TEMPLATE

  const renderTradeTemplate = (
    <div className="primary_gradient_bg trade_block">
      <div>
        <p className="text_regular_16_w500">Trade</p>
        <p className="text_regular_12_o7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
          porttitor est.
        </p>
        <p>
          <span className="text_regular_14">Learn more</span>
          <img src={learn_more} alt="learn_more" className="cursor" />
        </p>
      </div>
      <div>
        <p
          onClick={() => handleToggleState(1)}
          className={toggleState === 1 ? "active" : null}
        >
          <span>Exchange</span>
          <img src={right_arrow} alt="right arrow" />
        </p>
        <p
          onClick={() => handleToggleState(2)}
          className={toggleState === 2 ? "active" : null}
        >
          <span>Liquidity</span>
          <img src={right_arrow} alt="right arrow" />
        </p>
        <p
          onClick={() => handleToggleState(3)}
          className={toggleState === 3 ? "active" : null}
        >
          <span>LP Migration</span>
          <img src={right_arrow} alt="right arrow" />
        </p>
        <p
          onClick={() => handleToggleState(4)}
          className={toggleState === 4 ? "active" : null}
        >
          <span>V1 Liquidity (old)</span>
          <img src={right_arrow} alt="right arrow" />
        </p>
      </div>
    </div>
  );

  const renderTradeTypes = (
    <>
      {toggleState === 1 && <Exchange />}
      {toggleState === 2 && <Liquidity />}
      {toggleState === 3 && <LpMigration />}
      {toggleState === 4 && <ViLiquidity />}
    </>
  );

  //RENDER TRADE SCREEN

  const renderScreen = (
    <div className="trade_screen">
      {renderTradeTemplate}
      {renderTradeTypes}
    </div>
  );

  return <>{renderScreen}</>;
};

export default TradeScreen;
