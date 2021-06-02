import React from "react";
import "../../styles/patterns/modal.scss";
import Button from "../../components/button";

import wrongNetworkIcon from '../../assets/icons/wrongNetwork.svg';

const wrongNetwork = () => {
  return (
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
};

export default wrongNetwork;
