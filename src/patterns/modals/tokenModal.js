import React from "react";

//IMPORTING STYLESHEETS

import "../../styles/patterns/modal.scss";

//IMPORTING MEDIA ASSETS

import closeIcon from "../../assets/icons/close.svg";
import magnify from "../../assets/icons/magnify.svg";
import binance from "../../assets/icons/binance.svg";
import etherium from "../../assets/icons/etherium.svg";
import alpaca from "../../assets/icons/alpaca.svg";
import tokenModal from "../../assets/icons/tokenModal.svg";
import whiteDownArrow from "../../assets/icons/whiteDownArrow.svg";

const TokenModal = ({ setIsOpenModal }) => {
  return (
    <div className="modal tokenModal">
      <div className="flex">
        <img src={tokenModal} alt="token" />
        <p className="text_regular_24_w600">Select a Token</p>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">
            <img
              src={closeIcon}
              alt="img"
              className="cursor"
              onClick={() => setIsOpenModal(false)}
            />
          </div>
        </div>
      </div>

      <form>
        <input
          class="searchToken"
          type="text"
          placeholder="Search token name or paste address"
        />
        <button>
          <img src={magnify} alt="Magnify" />
        </button>
      </form>

      <div className="tokenHead">
        <p className="text_regular_14">Token Name</p>
        <div className="modalDownArrowBox">
          <div className="modalDownArrowIcon">
            <img src={whiteDownArrow} alt="img" />
          </div>
        </div>
      </div>

      <div className="tokenName">
        <div className="tokenBox text_regular_14">
          <img src={binance} alt="img" />
          <div className="token-name">
            <p>Binance</p>
          </div>
          <div className="smallName">
            <p>bnb</p>
          </div>
        </div>
        <div className="tokenBox text_regular_14">
          <img src={etherium} alt="img" />
          <div className="token-name">
            <p>Etherium</p>
          </div>
          <div className="smallName">
            <p>eth</p>
          </div>
        </div>
        <div className="tokenBox text_regular_14">
          <img src={alpaca} alt="img" />
          <div className="token-name">
            <p>Alpaca</p>
          </div>
          <div className="smallName">
            <p>ALP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenModal;
