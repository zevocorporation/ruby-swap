import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//IMPORTING STYLESHEET

import "../styles/screens/predictionScreen.scss";
import "../styles/patterns/card.scss";

//IMPORTING COMPONENTS

import Button from "../components/button";

//IMPORTING PATTERNS

import Modal from "../patterns/modals/modal";

//IMPORTING MEDIA ASSETS

import play from "../assets/icons/play.svg";
import circle_right from "../assets/icons/circle_right.svg";
import circle_left from "../assets/icons/circle_left.svg";
import prediction from "../assets/icons/prediction.svg";
import bnb from "../assets/icons/bnb.svg";
import clock from "../assets/icons/clock.svg";
import primary_alarm from "../assets/icons/primary_alarm.svg";
import next_circle from "../assets/icons/next_circle.svg";
import expired_close from "../assets/icons/expired_close.svg";
import prediction_line from "../assets/icons/prediction_line.svg";
import trade_up from "../assets/icons/trade_up.svg";
import trade_down from "../assets/icons/trade_down.svg";
import chart from "../assets/icons/chart.svg";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  const char =
    props.type === "next" ? (
      <img src={circle_right} alt="rightarrow" />
    ) : (
      <img src={circle_left} alt="leftarow" />
    );

  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

const PredictionScreen = () => {
  const [iscard, setIsCard] = useState(false);
  const [isChartOpen, setIsChartOpen] = useState(false);
  const [indicator, setIndicator] = useState(false);
  const [saveChartModal, setSaveChartModal] = useState(false);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderScreenHeader = (
    <div className="prediction_header">
      <div className="col_one">
        <img alt="coin" src={bnb} />
        <p className="text_regular_20_w500">BNBUSDT</p>
        <span className="text_regular_14">$429.905</span>
      </div>
      <div className="col_two">
        <img src={prediction} alt="prediction" />
      </div>
      <div className="col_three">
        <div>
          <span className="text_regular_20_w500">04.57</span>
          <p className="text_regular_14">5m</p>
          <img src={primary_alarm} alt="alarm" />
        </div>
        <img src={clock} alt="clock" />
      </div>
    </div>
  );

  const renderExpiredCard = (
    <div className="prediction_card">
      <div className="card_wrapper  expired_card">
        <div className="card_header">
          <p>
            <img src={expired_close} alt="play_icon" />
            <span className="text_regular_14_w500">EXPIRED</span>
          </p>
          <p className="text_regular_14">#1234</p>
        </div>
        <div className="row_one" style={{ margin: "2em auto 0" }}>
          <p className="text_regular_14_w500">UP</p>
          <p className="text_regular_12_o7">3.74X Payout</p>
        </div>
        <div className="row_two">
          <p className="text_regular_14">Last Price</p>
          <div>
            <p className="text_regular_20_w500">$412.03</p>
            <p>
              <img src={trade_down} alt="down" />
              <span className="text_regular_14">$0.993</span>
            </p>
          </div>
          <div>
            <p className="text_regular_14_o7">closed price</p>
            <p className="text_regular_14_o7">$424.85</p>
          </div>
          <div>
            <p className="text_regular_14_o7">Prize pool</p>
            <p className="text_regular_16_w500">61.187 BNB</p>
          </div>
        </div>
        <div className="row_three">
          <p className="text_regular_14_w500">DOWN</p>
          <p className="text_regular_12_o7">3.74X Payout</p>
        </div>
      </div>
    </div>
  );

  const renderLivecard = (
    <div className="prediction_card">
      <div className="card_wrapper" style={{ transform: "scale(1.05)" }}>
        <div className="card_header">
          <p>
            <img src={play} alt="play_icon" />
            <span className="text_regular_14_w500">LIVE</span>
          </p>
          <p className="text_regular_14">#1234</p>
        </div>
        <div style={{ margin: "1em 0 2em" }}>
          <img src={prediction_line} alt="line" style={{ width: "100%" }} />
        </div>
        <div className="row_one">
          <p className="text_regular_14_w500">UP</p>
          <p className="text_regular_12_o7">3.74X Payout</p>
        </div>
        <div className="row_two">
          <p className="text_regular_14">Last Price</p>
          <div>
            <p className="text_regular_20_w500">$412.03</p>
            <p>
              <img src={trade_up} alt="up" />
              <span className="text_regular_14">$0.993</span>
            </p>
          </div>
          <div>
            <p className="text_regular_14_o7">Locked price</p>
            <p className="text_regular_14_o7">$424.85</p>
          </div>
          <div>
            <p className="text_regular_14_o7">Prize pool</p>
            <p className="text_regular_16_w500">61.187 BNB</p>
          </div>
        </div>
        <div className="row_three">
          <p className="text_regular_14_w500">DOWN</p>
          <p className="text_regular_12_o7">3.74X Payout</p>
        </div>
      </div>
    </div>
  );

  const renderNextCard = (
    <div className="prediction_card">
      <div className={iscard ? "next_card active" : "next_card"}>
        <div className="face front">
          <div className="card_header">
            <p>
              <img src={next_circle} alt="play_icon" />
              <span className="text_regular_14_w500">NEXT</span>
            </p>
            <p className="text_regular_14">#1234</p>
          </div>
          <div className="row_one" style={{ margin: "2em auto 0" }}>
            <p className="text_regular_14_w500">UP</p>
            <p className="text_regular_12_o7">3.74X Payout</p>
          </div>
          <div className="row_two">
            <div>
              <p className="text_regular_14_o7">Prize pool</p>
              <p className="text_regular_16_w500">61.187 BNB</p>
            </div>
            <section>
              <Button className="btn-primary" onClick={() => setIsCard(true)}>
                Enter UP
              </Button>
            </section>
            <section>
              <Button className="btn-primary">Enter DOWN</Button>
            </section>
          </div>
          <div className="row_three">
            <p className="text_regular_14_w500">DOWN</p>
            <p className="text_regular_12_o7">3.74X Payout</p>
          </div>
        </div>
        <div className="face back">
          <div className="card_header">
            <p>
              <img
                src={circle_left}
                alt="left"
                className="cursor"
                onClick={() => setIsCard(false)}
              />
              <span className="text_regular_14_w500">Set Position</span>
            </p>
            <p>
              <img src={trade_up} alt="up" />
              <span className="text_regular_14">UP</span>
            </p>
          </div>
          <div className="card_header" style={{ marginTop: "1em" }}>
            <p className="text_regular_14">Commit:</p>
            <p>
              <img src={bnb} alt="up" />
              <span className="text_regular_14">BNB</span>
            </p>
          </div>
          <section>
            <input type="number" />
          </section>
          <div className="card_header">
            <span></span>
            <span className="text_regular_12_o7">Balance: 0</span>
          </div>
          <div className="price_stats">
            <p>10X</p>
            <p>20X</p>
            <p>50X</p>
            <p>75X</p>
            <p>MAX</p>
          </div>
          <div className="btn_class">
            <Button>Insufficient BNB Balance</Button>
          </div>
          <p className="text_regular_12_o7">
            You won’t be able to remove or change your position once you enter
            it.
          </p>
        </div>
      </div>
    </div>
  );

  const renderView = (
    <div className="slider">
      <Slider
        {...settings}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
      >
        {renderExpiredCard}
        {renderExpiredCard}
        {renderLivecard}
        {renderNextCard}
      </Slider>
    </div>
  );

  const renderChartButton = (
    <div className="chart_btn">
      <p onClick={() => setIsChartOpen(true)}>
        <img src={chart} alt="chart" />
        <span className="text_regular_16_w500">Chart</span>
      </p>
    </div>
  );

  //RENDER SCREEN

  const renderScreen = (
    <div className="prediction_screen">
      {renderScreenHeader}
      {renderView}
      {renderChartButton}
    </div>
  );

  return (
    <>
      {renderScreen}
      {isChartOpen && (
        <Modal
          variant="chart"
          setIsOpenModal={setIsChartOpen}
          setIndicator={setIndicator}
          setSaveChartModal={setSaveChartModal}
        />
      )}
      {indicator && <Modal variant="indicator" setIndicator={setIndicator} />}
      {saveChartModal && (
        <Modal variant="saveChart" setSaveChartModal={setSaveChartModal} />
      )}

      {isChartOpen && <div className={"backdrop_transition active"}></div>}
    </>
  );
};

export default PredictionScreen;
