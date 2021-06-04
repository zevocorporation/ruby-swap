import React from "react";

//IMPORTING STYLESHEET

import "../styles/screens/farmsScreen.scss";

//IMPORTING MEDIA ASSETS

// import cardview_selected from "../assets/icons/cardview_selected.svg";
import cardview_unselected from "../assets/icons/cardview_unselected.svg";
import listview_selected from "../assets/icons/listview_selected.svg";
// import listview_unselected from "../assets/icons/listview_unselected.svg";
import search from "../assets/icons/search.svg";
import downarrow_white from "../assets/icons/downarrow_white.svg";
import toggleoff from "../assets/icons/toggleoff.svg";

const FarmsScreen = () => {
  //RENDER SCREEN HEADER

  const renderScreenHeader = (
    <div className="farms_header">
      <div className="block_left">
        <img src={cardview_unselected} alt="card view" />
        <img src={listview_selected} alt="list view" />
        <span className="text_regular_16_w500">Staked only</span>
        <img src={toggleoff} alt="toggleoff" style={{ width: "40px" }} />
        <p>
          <span className="text_regular_14_w500">Live</span> |{" "}
          <span className="text_regular_14_w500">Finished</span>
        </p>
      </div>
      <div className="block_right">
        <p className="text_regular_14">Sort by:</p>
        <p className="cursor">
          <span className="text_regular_16_w500">Multiplier</span>
          <img src={downarrow_white} alt="down arrow" />
        </p>
        <input type="text" placeholder="Search farms" />
        <img src={search} alt="search" />
      </div>
    </div>
  );

  //RENDER SCREEN

  const renderScreen = <div className="farms_screen">{renderScreenHeader}</div>;

  return <>{renderScreen}</>;
};

export default FarmsScreen;
