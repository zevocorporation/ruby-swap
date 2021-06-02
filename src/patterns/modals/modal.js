import React from "react";

//IMPORTING STYLESHEETS

import "../../styles/patterns/modal.scss";

//IMPORTING COMPONENTS

import Button from "../../components/button";

//IMPORTING MEDIA ASSETS

import wrongNetworkIcon from "../../assets/icons/wrong_network.svg";

const Modal = ({ variant }) => {
  const renderWrongNetwork = (
    <div>
      <div className="wrongNetworkModal">
        <div className="modalHead">
          <div className="modalLogo">
            <div id="icon">
              <img src={wrongNetworkIcon} alt="wrongNetwork" />
            </div>
          </div>
          <div className="modalText">
            <p>Wrong network</p>
          </div>
        </div>
        <div className="modalAlert">
          <p>Oops! Seems like you’re in a wrong network</p>
        </div>
        <div className="modalAbout" id="networkModalAbout">
          <p>
            It seems you’re connected to a wrong network. Change network to
            Mainnet
          </p>
        </div>

        <div className="modalButton" id="networkmodalButton">
          <Button className="btn-primary">Change Network</Button>
        </div>
      </div>
    </div>
  );

  const renderSettings = (
    <div>
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
    </div>
  );

  const renderWarning = (
    <div>
      <div className="warningModal">
        <div className="modalHead">
          <div className="modalLogo">
            <div id="icon"></div>
          </div>
          <div className="modalText">
            <p>Warning</p>
          </div>
        </div>

        <div className="modalAbout">
          <p>
            Lottery ticket purchases are final. Your RUBY will not be returned
            to you after you spend it to buy tickets. Tickets are only valid for
            one lottery draw, and will be burned after the draw. Buying tickets
            does not guarantee you will win anything. Please only participate
            once you understand the risks.
          </p>
        </div>

        <button className="modalButton">
          <Button className="btn-primary">I understand</Button>
        </button>
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
