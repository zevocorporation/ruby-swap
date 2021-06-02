import React from "react";

//IMPORTING STYLESHEET

import "../styles/screens/home.scss";

//IMPORTING COMPONENTS

import Button from "../components/button";

//IMPORTING MEDIA ASSETS

import right_arrow from "../assets/icons/right_arrow.svg";
import learn_more from "../assets/icons/learn_more.svg";
import ruby from "../assets/images/ruby.svg";
import lottery from "../assets/images/lottery.svg";

const HomeScreen = () => {
  //RENDER RUBY FORM

  const renderRubyForm = (
    <div className="primary_gradient_bg">
      <img src={ruby} alt="ruby" />
      <p className="text_regular_24_w600">Farms & Staking</p>
      <p className="text_regular_14_o7">
        Sed nullam viverra fusce id at amet donec.
      </p>
      <div>
        <p className="text_regular_14_o7">Ruby to Harvest</p>
        <p>
          <span className="text_regular_20_w500">0.000</span>
          <span className="text_regular_16_o7">~$0.00</span>
        </p>
      </div>
      <div>
        <p className="text_regular_14_o7">Ruby in wallet</p>
        <p>
          <span className="text_regular_20_w500">0.000</span>
          <span className="text_regular_16_o7">~$0.00</span>
        </p>
      </div>
      <div className="btn">
        <Button className="btn-primary">Harvest All (0)</Button>
      </div>
    </div>
  );

  //RENDER LOTTERY FORM

  const renderLotteryForm = (
    <div className="primary_gradient_bg">
      <img src={lottery} alt="lottery" />
      <p className="text_regular_24_w600">Your Lottery Winnings</p>
      <p className="text_regular_14_o7">
        Sed nullam viverra fusce id at amet donec.
      </p>
      <div>
        <p className="text_regular_14_o7">Ruby to Collect</p>
        <p>
          <span className="text_regular_20_w500">0.000</span>
          <span className="text_regular_16_o7">~$0.00</span>
        </p>
      </div>
      <div>
        <p className="text_regular_14_o7">Total Jackpot this Round</p>
        <p>
          <span className="text_regular_20_w500">Comming Soon</span>
        </p>
      </div>
      <div className="btn">
        <Button className="btn-secondary">Collect Winnings</Button>
        <Button className="btn-primary">Approve Ruby</Button>
      </div>
    </div>
  );

  const renderForm = (
    <div className="card_block">
      {renderRubyForm}
      {renderLotteryForm}
      {}
    </div>
  );
  //RENDER EARN BLOCK

  const renderEarn = (
    <div className="earn">
      <div className="primary_gradient_bg">
        <p className="text_regular_16">Earn</p>
        <p className="text_regular_20">305.40%</p>
        <div>
          <p className="text_regular_16_o7">APR in Farms</p>
          <img src={right_arrow} alt="right_arrow" />
        </div>
      </div>
      <div className="primary_gradient_bg">
        <p className="text_regular_16">Earn</p>
        <p className="text_regular_20">RUBY, VRT, KALM</p>
        <div>
          <p className="text_regular_16_o7">In Pools</p>
          <img src={right_arrow} alt="right_arrow" />
        </div>
      </div>
      <div className="primary_gradient_bg">
        <p className="text_regular_16">Lottery</p>
        <p className="text_regular_20">Comming Soon</p>
        <div>
          <p className="text_regular_16_o7">Stay Tuned!</p>
          <img src={right_arrow} alt="right_arrow" />
        </div>
      </div>
    </div>
  );

  //RENDER STATISTICS BLOCK

  const renderStatistics = (
    <div className="stats">
      <div className="primary_gradient_bg">
        <p className="text_regular_24_w600">Ruby Statistics</p>
        <p className="text_regular_14_o7">
          Sed nullam viverra fusce id at amet donec.
        </p>
        <div>
          <p className="text_regular_16_o7">Total RUBY Supply</p>
          <p className="text_regular_20_w500">175,329,827</p>
        </div>
        <div>
          <p className="text_regular_16_o7">Total RUBY Burned</p>
          <p className="text_regular_20_w500">175,329,827</p>
        </div>
        <div>
          <p className="text_regular_16_o7">New RUBY/block</p>
          <p className="text_regular_20_w500">20</p>
        </div>
      </div>
      <div className="primary_gradient_bg">
        <p className="text_regular_24_w600">Total Value Locked (TVL)</p>
        <p className="text_regular_14_o7">
          Sed nullam viverra fusce id at amet donec.
        </p>
        <p className="text_regular_20_w500">$6,506,937,559</p>
        <p className="flex">
          <span className="text_regular_14_o7">Learn more</span>
          <img src={learn_more} alt="learn_more" />
        </p>
      </div>
    </div>
  );

  const renderScreen = (
    <div className="home">
      {renderForm}
      {renderEarn}
      {renderStatistics}
    </div>
  );
  return <>{renderScreen}</>;
};

export default HomeScreen;
