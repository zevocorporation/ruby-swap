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
import ethereum from "../../assets/icons/ethereum.svg";
import { getQuote } from "../../data/fromChain/getQuote";

const Exchange = () => {
  //INITIALIZING HOOKS

  const [swapCheckbox, setSwapCheckbox] = useState(false);
  const [liquidityCheckbox, setLiquidityCheckbox] = useState(false);
  const [bridgeCheckbox, setBridgeCheckbox] = useState(false);

  //MODAL STATES

  const [recentTransactionModal, setRecentTransactionModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false);
  const [inputTokenModal, setInputTokenModal] = useState(false);
  const [outputTokenModal, setOutputTokenModal] = useState(false);
  const [connectWalletModal, setConnectWalletModal] = useState(false);

  //INPUT STATES

  const [exchangeInput, setExchangeInput] = useState(0);
  const [exchangeOutput, setExchangeOutput] = useState(0);
  const [minutes, setMinutes] = useState(20);
  const [selectedToken, setSelectedToken] = useState({
    image: ethereum,
    address: "0xc778417e063141139fce010982780140aa0cd5ab",
    title: "Ethereum",
  });
  const [selectedOutputToken, setSelectedOutputToken] = useState({
    image: binance,
    address: "0xBFc358F36Be8eB80Cc73b39f3E99e09906bD44A6",
    title: "Test",
  });

  const handleInput = async (_in) => {
    setExchangeInput(_in);
    const path = new Array(1);
    path[0] = selectedToken.address;
    path[1] = selectedOutputToken.address;
    const output = await getQuote(_in, path);
    setExchangeOutput(output[1]);
  };

  const handleSwap = () => {};
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
            min="0"
            value={exchangeInput === 0 ? "" : exchangeInput}
            className="text_regular_20_w500"
            onChange={(e) => handleInput(e.target.value)}
          />
          <div onClick={() => setInputTokenModal(true)}>
            <img
              src={selectedToken.image}
              alt="binance"
              style={{ width: "1.25em", marginRight: "0.5em" }}
            />
            <span className="text_regular_14_w500">{selectedToken.title}</span>
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
            readOnly
          />
          <div onClick={() => setOutputTokenModal(true)}>
            <img
              src={selectedOutputToken.image}
              alt="binance"
              style={{ width: "1.25em", marginRight: "0.5em" }}
            />
            <span className="text_regular_14_w500">
              {selectedOutputToken.title}
            </span>
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
      {window.ethereum.selectedAddress !== null ? (
        <Button className="btn-primary" onClick={() => handleSwap()}>
          Swap
        </Button>
      ) : (
        <Button
          className="btn-primary"
          onClick={() => setConnectWalletModal(true)}
        >
          Unlock Wallet
        </Button>
      )}
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
        <Modal
          variant="settings"
          setIsOpenModal={setSettingsModal}
          minutes={minutes}
          setMinutes={setMinutes}
        />
      )}
      <Modal
        variant="connectWallet"
        isOpenModal={connectWalletModal}
        setIsOpenModal={setConnectWalletModal}
      />
      {inputTokenModal && (
        <TokenModal
          setIsOpenModal={setInputTokenModal}
          setSelectedToken={setSelectedToken}
          selectedToken={selectedToken}
        />
      )}
      {outputTokenModal && (
        <TokenModal
          variant="output"
          setIsOpenModal={setOutputTokenModal}
          selectedOutputToken={selectedOutputToken}
          setSelectedOutputToken={setSelectedOutputToken}
        />
      )}
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
