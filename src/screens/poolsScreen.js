import React, { useState } from "react";

//IMPORTING STYLESHEET

import "../styles/screens/poolsScreen.scss";
import PoolsCard from "../patterns/cards/poolsCard";

// IMPORTING MEDIA ASSETS

import cardview_selected from "../assets/icons/cardview_selected.svg";
import cardview_unselected from "../assets/icons/cardview_unselected.svg";
import listview_selected from "../assets/icons/listview_selected.svg";
import listview_unselected from "../assets/icons/listview_unselected.svg";
import search from "../assets/icons/search.svg";
import downarrow_white from "../assets/icons/downarrow_white.svg";
import toggleoff from "../assets/icons/toggleoff.svg";
import toggleon from "../assets/icons/toggleon.svg";

const PoolsScreen = () => {
  const [cardView, setCardView] = useState(true);
  const [listView, setListView] = useState(false);
  const [multiplierDropdown, setMultiplierDropdown] = useState(false);
  const [staked, setstaked] = useState(false);

  const handleToggleView = () => {
    if (cardView) {
      setListView(true);
      setCardView(false);
    } else {
      setCardView(true);
      setListView(false);
    }
  };

  const renderMultiplierdropdown = (
    <div
      className={
        multiplierDropdown
          ? "multiplier_dropdown_content active"
          : "multiplier_dropdown_content"
      }
    >
      <p>APR</p>
      <p>HOT</p>
      <p>Earn</p>
      <p>Liquidity</p>
    </div>
  );

  //RENDER SCREEN HEADER

  const renderScreenHeader = (
    <div className="pools_header">
      <div className="block_left">
        {cardView ? (
          <img src={cardview_selected} alt="card view" />
        ) : (
          <img
            src={cardview_unselected}
            alt="card view"
            onClick={() => handleToggleView()}
          />
        )}
        {listView ? (
          <img src={listview_selected} alt="list view" />
        ) : (
          <img
            src={listview_unselected}
            alt="list view"
            onClick={() => handleToggleView()}
          />
        )}
        <span className="text_regular_16_w500">Staked only</span>
        {!staked ? (
          <img
            src={toggleoff}
            alt="toggleoff"
            style={{ width: "40px" }}
            onClick={() => setstaked(true)}
          />
        ) : (
          <img
            src={toggleon}
            alt="toggleoff"
            style={{ width: "40px" }}
            onClick={() => setstaked(false)}
          />
        )}
        <p>
          <span
            className={staked ? "text_regular_14_o7" : "text_regular_14_w500"}
          >
            Live
          </span>
          <span style={{ margin: "0 1em", color: " #6D6D6D" }}>|</span>
          <span
            className={staked ? "text_regular_14_w500" : "text_regular_14_o7"}
          >
            Finished
          </span>
        </p>
      </div>
      <div className="block_right">
        <p className="text_regular_14">Sort by:</p>
        <p
          className="cursor multiplier_dropdown"
          onClick={() =>
            setMultiplierDropdown(
              (prevMultiplierDropdown) => !prevMultiplierDropdown
            )
          }
        >
          <span className="text_regular_16_w500">Multiplier</span>
          <img src={downarrow_white} alt="down arrow" />
          {renderMultiplierdropdown}
        </p>
        <input type="text" placeholder="Search pools" />
        <img src={search} alt="search" />
      </div>
    </div>
  );

  const renderView = (
    <div>
      {cardView ? (
        <div className="card_container">
          <PoolsCard />
          <PoolsCard />
          <PoolsCard />
          <PoolsCard />
        </div>
      ) : (
        <div className="grid_container">
          <PoolsCard variant="grid" />
          <PoolsCard variant="grid" />
          <PoolsCard variant="grid" />
          <PoolsCard variant="grid" />
        </div>
      )}
    </div>
  );

  //RENDER SCREEN

  const renderScreen = (
    <div className="pools_screen">
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

export default PoolsScreen;
