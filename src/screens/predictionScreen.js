import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//IMPORTING STYLESHEET

import "../styles/screens/predictionScreen.scss";
import "../styles/patterns/card.scss";

import play from "../assets/icons/play.svg";
// import arrowRight from "../assets/icons/arrowRight.svg";
// import arrowLeft from "../assets/icons/arrowLeft.svg";
import prediction from "../assets/icons/prediction.svg";
import singleCoin from "../assets/icons/singleCoin.svg";
import clock from "../assets/icons/clock.svg";
import greenArrow from "../assets/icons/greenArrow.svg";
import redArrow from "../assets/icons/redArrow.svg";
import bitcoin from "../assets/icons/bitcoin.svg";
import arrowRightCircle from "../assets/icons/arrowRightCircle.svg";

import Button from "../components/button";

const PredictionScreen = () => {
  let settings = {
    dot: false,
    infinte: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const renderScreenHeader = (
    <div className="prediction_header">
      <div className="block_left" id="bg">
        <img src={singleCoin} alt="t" />
        <p>BNBUSDT</p>
        <p>$429.905</p>
      </div>
      <div className="block_mid">
        {/* <img src={arrowLeft} alt="t" /> */}
        <img src={prediction} alt="t" />
        {/* <img src={arrowRight} alt="t" /> */}
      </div>
      <div className="block_right">
        <div className="bR" id="bg">
          <p>04:27</p>
          <p>5m</p>
          {"   "}
          <img src={clock} alt="t" />
        </div>
        <img src={clock} alt="t" />
      </div>
    </div>
  );

  const renderView = (
    <Slider {...settings}>
      <div className="card_container">
        <div className="cardPrediction" style={{ width: "315px" }}>
          <div className="card">
            <div className="cardHead">
              <div className="cardLogo">
                <img
                  src={play}
                  alt="t"
                  style={{ width: "75px", height: "45px" }}
                />
                {/* <p>LIVE</p> */}
              </div>

              <div className="cardName">
                <p className="text_regular_14_o7">
                  <p>#1234</p>
                </p>
              </div>
            </div>

            <div className="cardAbout">
              <div className="prediction_progress">
                <div className="progress_per"></div>
              </div>
            </div>

            <div className="cardAbout" id="changeFlex">
              <div
                className="prediction_upDown"
                style={{ background: "#EC1654" }}
              >
                <span>
                  <p>
                    UP 3.74X{" "}
                    <span
                      className="text_regular_12"
                      style={{ color: "white" }}
                    >
                      Payout
                    </span>
                  </p>
                </span>
              </div>
              <div className="prediction_body">
                <div className="cardAbout">
                  <div className="cardDes">
                    <p className="text_regular_12_o7">Last Price</p>
                  </div>
                </div>
                <div className="cardAbout">
                  <div className="cardDes">
                    <p className="text_regular_16">$412.03</p>
                  </div>
                  <div className="cardStats">
                    {/* <img src="" alt="stats" /> */}
                    <img src={greenArrow} alt="up" />
                    <p className="text_regular_14">$0.993</p>
                  </div>
                </div>
                <div className="cardAbout">
                  <div className="cardDes">
                    <p className="text_regular_14_o7">Locked price</p>
                  </div>
                  <div className="cardStats">
                    <p className="text_regular_14">$424.85</p>
                  </div>
                </div>
                <div className="cardAbout">
                  <div className="cardDes">
                    <p className="text_regular_14_o7">Prize pool</p>
                  </div>
                  <div className="cardStats">
                    <p className="text_regular_16">61.187 BNB</p>
                  </div>
                </div>
              </div>
              <div
                className="prediction_upDown"
                style={{ background: "#1A1919" }}
              >
                <span>
                  <p>
                    Down 3.74X{" "}
                    <span
                      className="text_regular_12"
                      style={{ color: "white" }}
                    >
                      Payout
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card_container flip">
        <div className="cardPrediction" style={{ width: "315px" }}>
          <div className="card">
            <div className="cardHead">
              <div className="cardLogo">
                <img
                  src={play}
                  alt="t"
                  style={{ width: "75px", height: "45px" }}
                />
                {/* <p>Next</p> */}
              </div>

              <div className="cardName">
                <p className="text_regular_14_o7">
                  <p>#1234</p>
                </p>
              </div>
            </div>

            <div className="cardAbout">
              <div className="prediction_progress">
                <div className="progress_per"></div>
              </div>
            </div>

            <div className="cardAbout" id="changeFlex">
              <div className="prediction_upDown">
                <span>
                  <p>
                    UP 3.74X{" "}
                    <span
                      className="text_regular_12"
                      style={{ color: "white" }}
                    >
                      Payout
                    </span>
                  </p>
                </span>
              </div>
              <div className="prediction_body">
                <div className="cardAbout">
                  <div className="cardDes">
                    <p className="text_regular_14_o7">Prize pool</p>
                  </div>
                  <div className="cardStats">
                    <p className="text_regular_14">61.187 BNB</p>
                  </div>
                </div>
                <div className="buttons">
                  <Button className="btn-primary">Enter UP</Button>
                  <br></br>
                  <Button className="btn-primary">Enter DOWN</Button>
                </div>
              </div>
              <div
                className="prediction_upDown"
                style={{ background: "#EC1654" }}
              >
                <span>
                  <p>
                    Down 3.74X{" "}
                    <span
                      className="text_regular_12"
                      style={{ color: "white" }}
                    >
                      Payout
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card_container">
        <div className="cardPrediction" style={{ width: "315px" }}>
          <div className="card">
            <div className="cardHead">
              <div className="cardLogo">
                <img
                  src={play}
                  alt="t"
                  style={{ width: "75px", height: "45px" }}
                />
                {/* <p>Next</p> */}
              </div>

              <div className="cardName">
                <p className="text_regular_14_o7">
                  <p>#1234</p>
                </p>
              </div>
            </div>

            <div className="cardAbout">
              <div className="prediction_progress">
                <div className="progress_per"></div>
              </div>
            </div>

            <div className="cardAbout" id="changeFlex">
              <div
                className="prediction_upDown"
                style={{ background: "#EC1654" }}
              >
                <span>
                  <p>
                    UP 3.74X{" "}
                    <span
                      className="text_regular_12"
                      style={{ color: "white" }}
                    >
                      Payout
                    </span>
                  </p>
                </span>
              </div>
              <div className="prediction_body">
                <div className="cardAbout">
                  <div className="cardDes">
                    <p className="text_regular_14_o7">Prize pool</p>
                  </div>
                  <div className="cardStats">
                    <p className="text_regular_14">61.187 BNB</p>
                  </div>
                </div>
                <div className="buttons">
                  <Button className="btn-primary">Enter UP</Button>
                  <br></br>
                  <Button className="btn-primary">Enter DOWN</Button>
                </div>
              </div>
              <div
                className="prediction_upDown"
                style={{ background: "#1A1919" }}
              >
                <span>
                  <p>
                    Down 3.74X{" "}
                    <span
                      className="text_regular_12"
                      style={{ color: "white" }}
                    >
                      Payout
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{width:"313px"}}>
        <div className="cardHead">
          <div className="cardHeadRight" style={{ width: "120px" }}>
            <img src={arrowRightCircle} alt="r" />
            <p classname="text_regular_12_o7">Set Position</p>
          </div>
          <div className="cardHeadRight">
            <img src={greenArrow} />
            <p>UP</p>
          </div>
        </div>
        <div className="cardHead">
          <p classname="text_regular_12_o7">Commit:</p>
          <div className="cardHeadRight">
            <img src={bitcoin} />
            <p>BNB</p>
          </div>
        </div>
        <input type="text" placeholder="52.6" style={{ width: "100%" }} />
        <p style={{ float: "right" }} className="text_regular_12_o7">
          Balance:0
        </p>
        <div className="cardAbout">
          <div className="cardHeadRight btn-prediction">
            <Button className="btn-secondary">10X</Button>
            <Button className="btn-secondary">25X</Button>
            <Button className="btn-secondary">50X</Button>
            <Button className="btn-secondary">75X</Button>
            <Button className="btn-secondary">MAX</Button>
          </div>
        </div>
        <div>
          <Button className="btn-secondary" style={{marginLeft:"15%"}}>Insufficient BNB Balance</Button>
        </div>
        <br></br>
        <div className="cardHead">
        <p className="text_regular_12_o7">
        You won’t be able to remove or change your position once you enter it.
        </p>
        
        </div>
      </div>
      </div>
      <div className="card_container">
        <div className="cardPrediction" style={{ width: "315px" }}>
          <div className="card">
            <div className="cardHead">
              <div className="cardLogo">
                <img
                  src={play}
                  alt="t"
                  style={{ width: "75px", height: "45px" }}
                />
                {/* <p>LIVE</p> */}
              </div>

              <div className="cardName">
                <p className="text_regular_14_o7">
                  <p>#1234</p>
                </p>
              </div>
            </div>

            <div className="cardAbout">
              <div className="prediction_progress">
                <div className="progress_per"></div>
              </div>
            </div>

            <div className="cardAbout" id="changeFlex">
              <div
                className="prediction_upDown"
                style={{ background: "#EC1654" }}
              >
                <span>
                  <p>
                    UP 3.74X{" "}
                    <span
                      className="text_regular_12"
                      style={{ color: "white" }}
                    >
                      Payout
                    </span>
                  </p>
                </span>
              </div>
              <div className="prediction_body">
                <div className="cardAbout">
                  <div className="cardDes">
                    <p className="text_regular_12_o7">Last Price</p>
                  </div>
                </div>
                <div className="cardAbout">
                  <div className="cardDes">
                    <p className="text_regular_16">$412.03</p>
                  </div>
                  <div className="cardStats">
                    {/* <img src="" alt="stats" /> */}
                    <img src={redArrow} alt="down" />
                    <p className="text_regular_14">$0.993</p>
                  </div>
                </div>
                <div className="cardAbout">
                  <div className="cardDes">
                    <p className="text_regular_14_o7">Locked price</p>
                  </div>
                  <div className="cardStats">
                    <p className="text_regular_14">$424.85</p>
                  </div>
                </div>
                <div className="cardAbout">
                  <div className="cardDes">
                    <p className="text_regular_14_o7">Prize pool</p>
                  </div>
                  <div className="cardStats">
                    <p className="text_regular_16">61.187 BNB</p>
                  </div>
                </div>
              </div>
              <div
                className="prediction_upDown"
                style={{ background: "#1A1919" }}
              >
                <span>
                  <p>
                    Down 3.74X{" "}
                    <span
                      className="text_regular_12"
                      style={{ color: "white" }}
                    >
                      Payout
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Slider>
  );

  //RENDER SCREEN

  const renderScreen = (
    <div className="prediction_screen">
      {renderScreenHeader}
      {renderView}
    </div>
  );

  return (
    <>
      {renderScreen}

      {/* <div className={"backdrop_transition active"}></div> */}
    </>
  );
};

export default PredictionScreen;
