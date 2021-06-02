import React from "react";
import Button from "../../components/button";
import "../../styles/patterns/modal.scss";

const Settings = () => {
  return (
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
};

export default Settings;
