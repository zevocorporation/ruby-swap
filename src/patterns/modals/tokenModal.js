import React from "react";

//IMPORTING STYLESHEETS

import "../../styles/patterns/modal.scss";

import { Token } from "./tokenList";

//IMPORTING MEDIA ASSETS

import closeIcon from "../../assets/icons/close.svg";
import magnify from "../../assets/icons/magnify.svg";
import binance from "../../assets/icons/binance.svg";
// import ethereum from "../../assets/icons/ethereum.svg";
// import alpaca from "../../assets/icons/alpaca.svg";
import tokenModal from "../../assets/icons/tokenModal.svg";
import whiteDownArrow from "../../assets/icons/whiteDownArrow.svg";

const TokenModal = ({
  setIsOpenModal,
  setSelectedToken,
  selectedToken,
  variant,
  setSelectedOutputToken,
  selectedOutputToken,
}) => {
  const handleToken = (tokenlist) => {
    if (variant === "output") {
      setSelectedOutputToken({
        ...selectedOutputToken,
        title: tokenlist.title,
        address: tokenlist.address,
      });
      setIsOpenModal(false);
    } else {
      setSelectedToken({
        ...selectedToken,
        title: tokenlist.title,
        address: tokenlist.address,
      });
      setIsOpenModal(false);
    }
  };
  return (
    <div className="tokenModal">
      <div className="flex">
        <div>
          <img src={tokenModal} alt="token" />
          <p className="text_regular_24_w600">Select a Token</p>
        </div>

        <img
          src={closeIcon}
          alt="img"
          className="cursor"
          onClick={() => setIsOpenModal(false)}
        />
      </div>
      <div className="search_input">
        <input
          class="searchToken"
          type="text"
          placeholder="Search token name or paste address"
        />

        <img
          src={magnify}
          alt="Magnify"
          style={{ width: 24, height: 24, marginLeft: 16 }}
        />
      </div>
      <div className="flex">
        <p className="text_regular_16_w500">Token Name</p>
        <img
          src={whiteDownArrow}
          alt="arrow"
          style={{ width: 24, height: 24 }}
        />
      </div>
      <div className="token_list">
        {Token.map((tokenList) => {
          return (
            <div className="tokens" onClick={() => handleToken(tokenList)}>
              <div>
                <img src={binance} alt="symbol" />
                <p className="text_regular_16">{tokenList.title}</p>
              </div>
              <p className="text_regular_14">{tokenList.symbol}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TokenModal;
