import React from "react";

import "../../styles/patterns/card.scss";
import "../../styles/patterns/poolsCard.scss";
import "../../styles/patterns/grid.scss";

import Button from "../../components/button";
import dropDown from "../../assets/icons/downarrow_white.svg";

const PoolsCard = ({ variant }) => {
  const renderCardView = (
    <div>
      <div clas sName="card">
        <div className="cardHead">
          <div className="cardName">
            <p>Auto RUBY</p>
            <p className="text_regular_14_o7">Automatic restaking</p>
          </div>
          <div className="cardLogo">
            <img src="" alt="t" />
          </div>
        </div>
        <div className="cardAbout">
          <div className="cardDes">
            <p className="text_regular_14_o7">ARP:</p>
          </div>
          <div className="cardStats">
            <img src="" alt="t" />
            <p className="text_regular_14">61.4%</p>
          </div>
        </div>
        <div className="cardAbout">
          <div className="cardDes">
            <p className="text_regular_14_o7">Earn:</p>
          </div>
          <div className="cardStats">
            <p className="text_regular_14">RUBY</p>
          </div>
        </div>
        <div className="cardAbout">
          <p className="text_regular_14_o7">RUBY Earned</p>
        </div>
        <div className="cardAbout">
          <div className="cardDes">
            <p className="text_regular_14_o7">0</p>
          </div>
          <div className="cardStats">
            <Button className="btn-secondary">
              <p className="text_regular_14_o7">Collect</p>
            </Button>
          </div>
        </div>
        <div className="cardAbout">
          <p className="text_regular_14_o7">Stake RUBY</p>
        </div>
        <div className="cardButton">
          <Button className="btn-primary">Enable</Button>
        </div>
        <div className="cardLine"></div>
        <div className="cardDropDown">
          <p>Details</p>
          <img src={dropDown} alt="dropdown" />
        </div>
      </div>

      <div className="card" id="poolCard2">
        <div className="cardHead">
          <div className="cardName">
            <p className="text_regular_16">Auto RUBY Bounty</p>
          </div>
        </div>
        <div className="cardAbout">
          <div className="cardDes">
            <p className="text_regular_12_o7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              in eu quis aliquet fusce pulvinar.{" "}
            </p>
          </div>
        </div>
        <div className="poolInput">
          <input />
        </div>
        <div className="cardButton">
          <Button className="btn-primary">Claim</Button>
        </div>
      </div>
    </div>
  );

  const renderGridView = (
    <div>
      <div className="grid">
        <div className="grid-box-row">
          <div className="grid-box-col1">
            <div className="grid-box-img">
              <img src="" alt="u" />
            </div>
            <div className="grid-box-name">
              <p className="text_regular_14_o7">RUBY-BNB</p>
            </div>
          </div>
          <div className="grid-box-col2">
            <img src="" alt="t" />
            <p id="core">Core</p>
          </div>
          <div className="grid-box-col3">
            <p className="text_regular_14_o7">APR</p>
            <div className="grid-col3-data">
              <p className="text_regular_14">61.4%</p>
              <img src="" alt="t" />
            </div>
          </div>
          <div className="grid-box-col3">
            <p className="text_regular_14_o7">Earn</p>
            <p className="text_regular_14">RUBY</p>
          </div>
          <div className="grid-box-col4">
            <p className="text_regular_14_o7">Liquidity</p>
            <p className="text_regular_14">$706,072,91</p>
          </div>
          <div className="grid-box-col4">
            <p className="text_regular_14_o7">Multiplier</p>
            <p className="text_regular_14">40X</p>
          </div>
          <div className="grid-box-col2" id="grid-detail">
            <p>Detail</p>
            <img src={dropDown} alt="y" />
          </div>
        </div>
        <hr></hr>
        <div className="grid-box-row">
          <div className="grid-box-col1">
            <div className="grid-box-img">
              <img src="" alt="u" />
            </div>
            <div className="grid-box-name">
              <p className="text_regular_14_o7">RUBY-BNB</p>
            </div>
          </div>
          <div className="grid-box-col2">
            <img src="" alt="t" />
            <p id="core">Core</p>
          </div>
          <div className="grid-box-col3">
            <p className="text_regular_14_o7">APR</p>
            <div className="grid-col3-data">
              <p className="text_regular_14">61.4%</p>
              <img src="" alt="t" />
            </div>
          </div>
          <div className="grid-box-col3">
            <p className="text_regular_14_o7">Earn</p>
            <p className="text_regular_14">RUBY</p>
          </div>
          <div className="grid-box-col4">
            <p className="text_regular_14_o7">Liquidity</p>
            <p className="text_regular_14">$706,072,91</p>
          </div>
          <div className="grid-box-col4">
            <p className="text_regular_14_o7">Multiplier</p>
            <p className="text_regular_14">40X</p>
          </div>
          <div className="grid-box-col2" id="grid-detail">
            <p>Detail</p>
            <img src={dropDown} alt="y" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );

  return variant === "grid" ? renderGridView : renderGridView;
};

export default PoolsCard;
