import React, { useState } from "react";

import "../../styles/patterns/card.scss";
import "../../styles/patterns/poolsCard.scss";
import "../../styles/patterns/grid.scss";

import Button from "../../components/button";
import dropDown from "../../assets/icons/downarrow_white.svg";
import bar_chart from "../../assets/icons/bar_chart.svg";
import singleCoin from "../../assets/icons/singleCoin.svg";
// import checked from "../../assets/icons/checked.svg";
import learn_more from "../../assets/icons/learn_more.svg";
import metamask from "../../assets/icons/metamask.svg";

const PoolsCard = ({ variant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);

  const renderCardView = (
    <div className="cardPool">
      <div className="card">
        <div className="cardHead">
          <div className="cardName">
            <p className="text_regular_14">Auto RUBY</p>

            <p className="text_regular_12_o7">Automatic restaking</p>
          </div>
          <div className="cardLogo">
            <img
              src={singleCoin}
              alt="t"
              style={{ width: "75px", height: "78px" }}
            />
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
          <p className="text_regular_14">Recent RUBY profit:</p>
          <br />
        </div>
        <div className="cardAbout">
          <div className="cardDes">
            <p className="text_regular_14_o7">
              0.1% unstaking fee if withdrawn within 72h
            </p>
          </div>
          <div className="cardStats">
            <Button className="btn-secondary" style={{ padding: "5px 1em" }}>
              Collect
            </Button>
          </div>
        </div>
        <div className="cardAbout">
          <p className="text_regular_14_o7">Stake RUBY</p>
        </div>
        <div className="cardButton">
          <Button className="btn-primary ">Enable</Button>
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
            <p className="text_regular_16_o7">Total Staked</p>
            <p className="text_regular_20_w500">175,329,827</p>
          </div>
          <div>
            <p className="text_regular_16_o7">Performance Fee</p>
            <p className="text_regular_16_w500">2%</p>
          </div>
          <div>
            <p>
              <span className="text_regular_14">View project site</span>
              <img src={learn_more} alt="learn" />
            </p>
          </div>
          <div>
            <p>
              <span className="text_regular_14">View contract</span>
              <img src={learn_more} alt="learn" />
            </p>
            <p>
              <span className="text_regular_14">Add to Metamask</span>
              <img src={metamask} alt="learn" />
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
          <img src={singleCoin} alt="coin" />
          <div>
            <p className="text_regular_14_w500">RUBY-BNB</p>
            <p className="text_regular_12_o7">Automatic restaking</p>
          </div>
        </div>
        <div className="block_right">
          <div>
            <section className="text_regular_14">RUBY Earned</section>
            <p className="text_regular_16_w500">0.0~ $0</p>
          </div>
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
            <section className="text_regular_14">Total Staked</section>
            <p className="text_regular_16_w500">61,848,677</p>
          </div>
          <div>
            <section className="text_regular_14">Ends In</section>
            <p className="text_regular_16_w500">-</p>
          </div>
          <p>
            <span className="text_regular_14">
              {isGridOpen ? "Hide" : "Details"}
            </span>
            <img
              src={dropDown}
              alt="down_arrow"
              onClick={() => setIsGridOpen((prevIsGridOpen) => !prevIsGridOpen)}
              className={
                isGridOpen ? "card_details_arrow active" : "card_details_arrow"
              }
            />
          </p>
        </div>
      </div>
      <div className={isGridOpen ? "grid_row_two active" : "grid_row_two"}>
        <div className="block_left">
          <div>
            <p>
              <span className="text_regular_14">View project site</span>
              <img src={learn_more} alt="learn_more" />
            </p>
            <p>
              <span className="text_regular_14">View Contract</span>
              <img src={learn_more} alt="learn_more" />
            </p>
          </div>
          <p>
            <span className="text_regular_14">Add to Metamask</span>
            <img src={metamask} alt="learn_more" />
          </p>
        </div>
        <div className="block_right">
          <div>
            <p className="text_regular_14">Recent RUBY Profit</p>
            <div>
              <p>0.0~ $0</p>
              <Button className="btn-secondary" style={{ padding: "5px 1em" }}>
                Harvest
              </Button>
            </div>
          </div>
          <div>
            <p className="text_regular_14">RUBY-BNB LP Staked</p>
            <Button className="btn-primary" style={{ padding: "5px 1em" }}>
              Enable
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return variant === "grid" ? renderGridView : renderCardView;
};

export default PoolsCard;
