import React from "react";

//IMPORTING STYLESHEET

import "../../styles/patterns/trade.scss";

//IMPORTING COMPONENTS

import Button from "../../components/button";

//IMPORTING MEDIA ASSETS

import learn_more from "../../assets/icons/learn_more.svg";
import error_outline from "../../assets/icons/error_outline.svg";

const LpMigration = () => {
  //RENDER TRADE HEADER

  const renderHeader = (
    <div className="trade_title">
      <div>
        <p className="text_regular_24_w600">Move LP Tokens to Wallet</p>
        <p className="text_regular_14_o7">
          Unstake your old LP tokens from farms and other projects.
        </p>
      </div>
    </div>
  );

  const renderContent = (
    <div className="migration_content">
      <p className="text_regular_16_w500">Unstake LP tokens from old Farms</p>
      <div>
        <p className="text_regular_12_o7">
          All farms will gradually switch to new farms, one-by-one. You can wait
          until farms switch over, or you can unstake in advance.
        </p>
        <Button className="btn-primary" style={{ padding: "0.5em 3em" }}>
          Go to Farms
        </Button>
      </div>
      <p>
        <img src={error_outline} alt="error" />
        <span className="text_regular_14">
          You DON’T need to unstake from Syrup Pools.
        </span>
      </p>
    </div>
  );
  //RENDER MIGRATION COMPONENTS

  const renderMigrationPattern = (
    <div>
      {renderHeader}
      {renderContent}
    </div>
  );

  const renderTradeDetails = (
    <div className="trade_type">
      <div className="primary_gradient_bg trade_details">
        <p className="text_regular_16_w500">What is LP Migration?</p>
        <p className="text_regular_12_o7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
          porttitor est quam netus egestas aliquam adipiscing elit.
        </p>
        <p className="flex">
          <span className="text_regular_14_o7">Learn more</span>
          <img src={learn_more} alt="learn_more" />
        </p>
      </div>
    </div>
  );
  return (
    <>
      {renderMigrationPattern}
      {renderTradeDetails}
    </>
  );
};

export default LpMigration;
