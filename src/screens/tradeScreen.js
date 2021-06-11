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
          <img src={learn_more} alt="learn_more" />
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

  const renderModals = (
    <div className="card" style={{ width: "1079px" }}>
      <div className="cardHead">
        <div className="cardHeadRight">
          <img src={chart} alt="u" />
          <p>Chart</p>
          <img src={line} alt="|" />
          <Button className="btn-secondary">1m</Button>
          <Button className="btn-secondary">5m</Button>
          <Button className="btn-secondary">30m</Button>
          <Button className="btn-secondary">1hr</Button>
          <img src={downarrow_white} alt="arrow" />
          <img src={line} alt="|" />
          <img src={barchart} alt="barChart" />
          <img src={candlestick} alt="candlestick" />
          <img src={areachart} alt="areaChart" />
          <img src={lineChart} alt="lineChart" />
          <img src={line} alt="|" />
          <img src={plusCircle} alt="plus" />
          <p>Compare</p>
          <img src={soundfx} alt="fx" />
          <p>Indicator</p>
        </div>

        <div>
          <div>
            <img src={camera} alt="camera" />
            <img src={close} alt="close" />
          </div>
        </div>
      </div>
      <div className="cardHead">
        <div className="cardAbout" style={{ justifyContent: "left" }}>
          <p className="text_regular_14">Binance Coin / TetherUS 5 BINANCE</p>
          <div id="posImg">
            <div className="image">
              <img src={eye} alt="see" />
            </div>
            <div className="image">
              <img src={points} alt="point" />
            </div>
            <div className="image">
              <img src={greenDot} alt="dot" />
            </div>
          </div>
          <p>418.24</p>
          <p style={{ marginLeft: "2%" }}>+2.59 (+0.82%)</p>
        </div>
      </div>
      <div className="box_1">
        <p>Vol</p>
        <p>23,885k</p>
        <img src={eye} alt="see" />
        <img src={settings} alt="settings" />
        <img src={whiteCross} alt="cross" />
        <img src={points} alt="point" />
      </div>
      <div style={{float:"right"}}>
        <img src={sun} alt="sun" />
      </div>
    </div>
  );

  //RENDER TRADE SCREEN

  const renderScreen = (
    <div className="trade_screen">
      {renderTradeTemplate}
      {renderModals}
      {/* {renderTradeTypes} */}
    </div>
  );

  return <>{renderScreen}</>;
};

export default TradeScreen;
