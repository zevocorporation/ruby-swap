import React, { useState } from "react";

//IMPORTING STYLESHEET

import "../../styles/patterns/trade.scss";

//IMPORTING COMPONENTS

import Button from "../../components/button";

//IMPORTING PATTERNS

import Modal from "../../patterns/modals/modal";
import TokenModal from "../../patterns/modals/tokenModal";

//IMPORTING MEDIA ASSETS

import learn_more from "../../assets/icons/learn_more.svg";
import downarrow_white from "../../assets/icons/downarrow_white.svg";
import settings from "../../assets/icons/settings.svg";
import clock from "../../assets/icons/clock.svg";
import binance from "../../assets/icons/binance.svg";
import checkbox from "../../assets/icons/checkbox.svg";
import checkbox_square from "../../assets/icons/checkbox_square.svg";
import upDownArrow from "../../assets/icons/upDownArrow.svg";

const Exchange = () => {
  //INITIALIZING HOOKS

  const [swapCheckbox, setSwapCheckbox] = useState(false);
  const [liquidityCheckbox, setLiquidityCheckbox] = useState(false);
  const [bridgeCheckbox, setBridgeCheckbox] = useState(false);
  const [recentTransactionModal, setRecentTransactionModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false);
  const [inputTokenModal, setInputTokenModal] = useState(false);
  const [outputTokenModal, setOutputTokenModal] = useState(false);
  const [exchangeInput, setExchangeInput] = useState(0);
  const [exchangeOutput, setExchangeOutput] = useState(0);

  //RENDER TRADE HEADER

  const renderHeader = (
    <div className="trade_title">
      <div>
        <p className="text_regular_24_w600">Exchange</p>
        <p className="text_regular_14_o7">Trade tokens in an instant</p>
      </div>
      <div>
        <img
          src={settings}
          alt="settings"
          onClick={() => setSettingsModal(true)}
        />
        <img
          src={clock}
          alt="clock"
          onClick={() => setRecentTransactionModal(true)}
        />
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
            value={exchangeInput === 0 ? "" : exchangeInput}
            className="text_regular_20_w500"
            onChange={(e) => setExchangeInput(e.target.value)}
          />
          <div onClick={() => setInputTokenModal(true)}>
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
      <div style={{ marginLeft: "50%", marginTop: "2%" }}>
        <img src={upDownArrow} alt="p" />
      </div>
      <div className="exchange_trade_input">
        <p className="text_regular_14">Output (estimated)</p>
        <div>
          <input
            type="number"
            value={exchangeOutput}
            className="text_regular_20_w500"
            onChange={(e) => setExchangeOutput(e.target.value)}
            readOnly
          />
          <div onClick={() => setOutputTokenModal(true)}>
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
    <div className="primary_gradient_bg_p28">
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
        <p className="text_regular_16_w500">What is Swap Exchange?</p>
        <p className="text_regular_12_o7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
          porttitor est quam netus egestas aliquam adipiscing elit.
        </p>
        <p className="flex">
          <span className="text_regular_14_o7">Learn more</span>
          <img src={learn_more} alt="learn_more" className="cursor" />
        </p>
      </div>
    </div>
  );

  return (
    <>
      {renderExchangPattern}
      {renderTradeDetails}
      {recentTransactionModal && (
        <Modal variant="recent" setIsOpenModal={setRecentTransactionModal} />
      )}
      {settingsModal && (
        <Modal variant="settings" setIsOpenModal={setSettingsModal} />
      )}
      {inputTokenModal && <TokenModal setIsOpenModal={setInputTokenModal} />}
      {outputTokenModal && <TokenModal setIsOpenModal={setOutputTokenModal} />}
      {(recentTransactionModal ||
        settingsModal ||
        inputTokenModal ||
        outputTokenModal) && (
        <div className={"backdrop_transition active"}></div>
      )}
    </>
  );
};

export default Exchange;
