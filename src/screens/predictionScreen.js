import React from "react";

//IMPORTING STYLESHEET

import "../styles/screens/predictionScreen.scss";
import "../styles/patterns/card.scss";

import Button from "../components/button";

const PredictionScreen = () => {
  const renderScreen = (
    <div className="prediction_screen">
      <div className="prediction_screen_head">
        <div className="prediction_screen_head_box1 text_regular_14">
          <img src="" alt="t" />
          <p>BNBUSDT</p>
          <p>$429.905</p>
        </div>
        <div className="prediction_screen_head_box2 text_regular_12">
          <p>TODO: ALL IMAGES</p>
        </div>
        <div className="prediction_screen_head_box3">
          <p>04:27</p>
          <p>5m</p>
          <img src="" alt="t" />
        </div>
      </div>

      <div className="prediction_card">
        <div className="prediction_card_head">
          <img src="" alt="t" />
          <p id="live_next">LIVE</p>
          <p id="data">#1234</p>
        </div>
        <div className="prediction_progress">
          <div className="progress_per"></div>
        </div>
        <div className="prediction_upDown" id="pup">
          <p>UP</p>
          <p className="text_regular_12" id="pre_num">
            3.74X Payout
          </p>
        </div>
        <div className="prediction_body">
          <div className="body_head">
            <p>Last Price</p>
          </div>
          <div className="body_range">
            <p>$412.03</p>
            <div className="body-range-data">
              <img src="" alt="p" />
              <p className="text_regular_12_o7">$0.993</p>
            </div>
          </div>
          <div className="body-data">
            <table className="text_regular_14_o7">
              <tr>
                <td>Locked price</td>
                <td>$424.85</td>
              </tr>
              <tr>
                <td>Prize pool</td>
                <td className="text_regular_14">61.187 BNB </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="prediction_upDown" id="pdown">
          <p>DOWN</p>
          <p className="text_regular_12" id="pre_num">
            3.74X Payout
          </p>
        </div>
      </div>

      <div className="prediction_card" id="card2">
        <div className="prediction_card_head">
          <img src="" alt="t" />
          <p id="live_next">NEXT</p>
          <p id="data">#1234</p>
        </div>
          <div className="prediction_progress">
            <div className="progress_per"></div>
          </div>
        <div className="prediction_upDown" id="pup">
          <p>UP</p>
          <p className="text_regular_12" id="pre_num">
            3.74X Payout
          </p>
        </div>
        <div className="prediction_body">
          <div className="body_range">
            <p>$412.03</p>
            <div className="body-range-data">
              <img src="" alt="p" />
              <p className="text_regular_12_o7">$0.993</p>
            </div>
          </div>
          <div className="buttons">
          <Button className="btn-primary" >Enter UP</Button><br></br>
          <Button className="btn-primary" >Enter DOWN</Button>
          </div>
          
        </div>
        <div className="prediction_upDown" id="pdown">
          <p>DOWN</p>
          <p className="text_regular_12" id="pre_num">
            3.74X Payout
          </p>
        </div>
      </div>
    </div>
  );
  return <>{renderScreen}</>;
};

export default PredictionScreen;
