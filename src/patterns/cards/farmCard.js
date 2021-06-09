import React, { useState } from "react";

//IMPORTING STYLESHEETS

import "../../styles/patterns/farmCard.scss";
import "../../styles/patterns/card.scss";
import "../../styles/patterns/grid.scss";

//IMPORTING COMPONENTS

import Button from "../../components/button";

//IMPORTING MEDIA ASSETS

import dropDown from "../../assets/icons/downarrow_white.svg";
import bar_chart from "../../assets/icons/bar_chart.svg";
import coins from "../../assets/icons/coins.svg";
import checked from "../../assets/icons/checked.svg";
import learn_more from "../../assets/icons/learn_more.svg";

const FarmCard = ({ variant }) => {
  //INITIALIZING HOOKS

  const [isOpen, setIsOpen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);

  const renderCardView = (
    <div className="cardFarm">
      <div className="card">
        <div className="cardHead">
          <div className="cardLogo">
            <img
              src={coins}
              alt="t"
              style={{ width: "75px", height: "45px" }}
            />
          </div>
          <div className="cardName">
            <p className="text_regular_14_o7">BUSD-BNB</p>
            <div className="cardHead2">
              <img
                src={checked}
                alt="checked"
                style={{ width: "14px", height: "14px", marginRight: "0.5em" }}
              />
              <p id="core">Core</p>
              <button id="coreButton">8x</button>
            </div>
          </div>
        </div>
        <div className="cardAbout">
          <div className="cardDes">
            <p className="text_regular_14_o7">ARP:</p>
          </div>
          <div className="cardStats">
            <img
              src={bar_chart}
              alt="chart"
              style={{ width: "15px", height: "15px" }}
            />
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
            <Button className="btn-secondary" style={{ padding: "5px 1em" }}>
              Collect
            </Button>
          </div>
        </div>
        <div className="cardAbout">
          <p className="text_regular_14_o7">RUBY-BNB LP Staked</p>
        </div>
        <div className="cardButton">
          <Button className="btn-primary ">Approve Contract</Button>
        </div>
        <div className="cardLine"></div>
        <div className="cardDropDown">
          <p className="text_regular_14">{isOpen ? "Hide" : "Details"}</p>
          <img
            src={dropDown}
            alt="t"
            onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
            className={
              isOpen ? "card_details_arrow active" : "card_details_arrow"
            }
          />
        </div>
        <div
          className={isOpen ? "dropdown_content active" : "dropdown_content"}
        >
          <div>
            <p className="text_regular_16_o7">Total Liquidity</p>
            <p className="text_regular_20_w500">123456</p>
          </div>
          <div>
            <p>
              <span className="text_regular_14">Get RUBY-BNB LP</span>
              <img src={learn_more} alt="learn" />
            </p>
            <p>
              <span className="text_regular_14">View Contract</span>
              <img src={learn_more} alt="learn" />
            </p>
          </div>
          <div>
            <p>
              <span className="text_regular_14">See pair info</span>
              <img src={learn_more} alt="learn" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGridView = (
    <div className="grid-box">
      <div className="grid_row_one">
        <div className="block_left">
          <img src={coins} alt="coin" />
          <p className="text_regular_14_w500">RUBY-BNB</p>
        </div>
        <div className="block_right">
          <p>
            <img
              src={checked}
              alt="tick"
              style={{ width: "14px", height: "14px", marginRight: "0.5em" }}
            />
            <span>Core</span>
          </p>
          <div>
            <section className="text_regular_14">APR</section>
            <p className="text_regular_16_w500">
              <span>61.4%</span>
              <img
                src={bar_chart}
                alt="chart"
                style={{ width: "20px", height: "20px", marginLeft: "0.5em" }}
              />
            </p>
          </div>
          <div>
            <section className="text_regular_14">Earn</section>
            <p className="text_regular_16_w500">RUBY</p>
          </div>
          <div>
            <section className="text_regular_14">Liquidity</section>
            <p className="text_regular_16_w500">$70,60,999</p>
          </div>
          <div>
            <section className="text_regular_14">Multiplier</section>
            <p className="text_regular_16_w500">40x</p>
          </div>
          <p>
            <span className="text_regular_14">
              {isGridOpen ? "Hide" : "Details"}
            </span>
            <img
              src={dropDown}
              alt="down_arrow"
              className="cursor"
              onClick={() => setIsGridOpen((prevIsGridOpen) => !prevIsGridOpen)}
              style={{
                transform: isGridOpen ? "rotate(180deg)" : "rotate(0deg)",
                marginLeft: "0.5em",
              }}
            />
          </p>
        </div>
      </div>
      {isGridOpen && (
        <div className="grid_row_two">
          <div className="block_left">
            <div>
              <p>
                <span className="text_regular_14">Get RUBY-BNB LP</span>
                <img src={learn_more} alt="learn_more" />
              </p>
              <p>
                <span className="text_regular_14">View Contract</span>
                <img src={learn_more} alt="learn_more" />
              </p>
            </div>
            <p>
              <span className="text_regular_14">See pair info</span>
              <img src={learn_more} alt="learn_more" />
            </p>
          </div>
          <div className="block_right">
            <div>
              <p className="text_regular_14">RUBY Earned</p>
              <div>
                <p>0</p>
                <Button
                  className="btn-secondary"
                  style={{ padding: "5px 1em" }}
                >
                  Harvest
                </Button>
              </div>
            </div>
            <div>
              <p className="text_regular_14">RUBY-BNB LP Staked</p>
              <Button className="btn-primary" style={{ padding: "5px 1em" }}>
                Approve Contract
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return variant === "grid" ? renderGridView : renderCardView;
};

export default FarmCard;
