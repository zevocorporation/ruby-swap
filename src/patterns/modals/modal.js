import React from "react";

//IMPORTING STYLESHEETS

import "../../styles/patterns/modal.scss";

//IMPORTING COMPONENTS

import Button from "../../components/button";

//IMPORTING MEDIA ASSETS

import wrongNetworkIcon from "../../assets/icons/wrong_network.svg";

const Modal = ({ variant }) => {
  //RENDER WRONG NETWORK

  const renderWrongNetwork = (
    <div className="modal">
      <div className="flex">
        <img src={wrongNetworkIcon} alt="wrongNetwork" />
        <p className="text_regular_24_w600">Wrong network</p>
      </div>
      <div>
        <p className="text_regular_16_w500">
          Oops! Seems like you’re in a wrong network
        </p>
      </div>
      <div>
        <p className="text_regular_14_o7">
          It seems you’re connected to a wrong network. Change network to
          Mainnet
        </p>
      </div>

      <div>
        <Button className="btn-primary">Change Network</Button>
      </div>
    </div>
  );

  //RENDER SETTINGS

  const renderSettings = (
    <div className="settingsModal">
      <div className="modalHead">
        <div className="modalLogo">
          <div id="icon"></div>
        </div>
        <div className="modalText">
          <p>Recent transactions</p>
        </div>
        <div className="modalCloseCrossBox">
          <div className="modalCloseIcon">x</div>
        </div>
      </div>

      <div className="modalAbout" id="settingAbout">
        <p>
          Please connect your crypto wallet to view your recent transactions
        </p>
      </div>

      <button className="modalButton" id="settingModalButton">
        <Button className="btn-primary">Close</Button>
      </button>
    </div>
  );

  //RENDER WARNING

  const renderWarning = (
    <div className="modal">
      <div className="flex">
        <img src={wrongNetworkIcon} alt="wrongNetwork" />
        <p className="text_regular_24_w600">Warning</p>
      </div>
      <div>
        <p className="text_regular_14_o7">
          Lottery ticket purchases are final. Your RUBY will not be returned to
          you after you spend it to buy tickets. Tickets are only valid for one
          lottery draw, and will be burned after the draw. Buying tickets does
          not guarantee you will win anything. Please only participate once you
          understand the risks.
        </p>
      </div>
      <div>
        <Button className="btn-primary">I understand</Button>
      </div>
    </div>
  );

  switch (variant) {
    case "wrongNetwork":
      return renderWrongNetwork;
    case "settings":
      return renderSettings;
    case "warning":
      return renderWarning;
    default:
      return null;
  }
};

export default Modal;
