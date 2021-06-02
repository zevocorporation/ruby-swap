import React from "react";
import "../../styles/patterns/modal.scss";

import Button from "../../components/button";

const Warning = () => {
  return (
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
};

export default Warning;
