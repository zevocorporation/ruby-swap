import React from "react";

//IMPORTING STYLESHEET

import "../../styles/patterns/trade.scss";

//IMPORTING COMPONENTS

import Button from "../../components/button";

//IMPORTING MEDIA ASSETS

import learn_more from "../../assets/icons/learn_more.svg";
import error_outline from "../../assets/icons/error_outline.svg";
import right_arrow from "../../assets/icons/right_arrow.svg";

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

  const renderHeaderTwo = (
    <div className="trade_title">
      <div>
        <p className="text_regular_24_w600">Remove Liquidity</p>
        <p className="text_regular_14_o7">
          Unstake your old LP tokens from the old liquidity pools.
        </p>
      </div>
    </div>
  );

  const renderHeaderThree = (
    <div className="trade_title">
      <div>
        <p className="text_regular_24_w600">
          Add Liquidity to New Liquidity Pools
        </p>
        <p className="text_regular_14_o7">
          stake your tokens in the updated Liquidity Pools.
        </p>
      </div>
    </div>
  );

  const renderHeaderFour = (
    <div className="trade_title">
      <div>
        <p className="text_regular_24_w600">Stake in New Farms</p>
        <p className="text_regular_14_o7">
          stake your updated LP tokens in RUBYSWAP farms.
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
      <p className="text_regular_16_w500">Unstake from other projects</p>
    </div>
  );

  const renderRemoveLiquidityContent = (
    <div>
      <p className="text_regular_16_w500" style={{ marginTop: "1em" }}>
        V1 LP Tokens in wallet
      </p>
      <div className="migration__block">
        <p className="text_regular_12_o7">No liquidity found.</p>
        <p className="text_regular_12_o7">
          Don't see a pool you joined?{" "}
          <span style={{ color: "#ec1654" }}>import</span> it.
        </p>
      </div>
      <p className="down_arrow">
        <img src={right_arrow} alt="rightarrow" />
      </p>
      <p className="text_regular_16_w500" style={{ marginTop: "1em" }}>
        Discontinued V2 LP
      </p>
      <div className="migration__block">
        <p className="text_regular_12_o7">
          if you added liquidity to V2 LPs during the migration attempt on April
          23, you need to unstake and remove liquidity.
        </p>
        <Button
          className="btn-primary"
          style={{ padding: "0.5em 3em", marginTop: "1em" }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
  //RENDER MIGRATION COMPONENTS

  const renderMigrationPattern = (
    <div className="migration">
      <div className="primary_gradient_bg_p28">
        {renderHeader}
        {renderContent}
      </div>
      <p className="down_arrow">
        <img src={right_arrow} alt="rightarrow" />
      </p>
      <div className="primary_gradient_bg_p28">
        {renderHeaderTwo}
        {renderRemoveLiquidityContent}
      </div>
      <p className="down_arrow">
        <img src={right_arrow} alt="rightarrow" />
      </p>
      <div className="primary_gradient_bg_p28">
        {renderHeaderThree}{" "}
        <div className="migration__block">
          <p className="text_regular_12_o7">
            Any new liquidity you add will use the updated system by default.
          </p>
          <p className="text_regular_12_o7">simple!</p>
          <Button
            className="btn-primary"
            style={{ padding: "0.5em 3em", marginTop: "1em" }}
          >
            Add Liquidity
          </Button>
        </div>
      </div>
      <p className="down_arrow">
        <img src={right_arrow} alt="rightarrow" />
      </p>
      <div className="primary_gradient_bg_p28">
        {renderHeaderFour}
        <div className="migration__block">
          <p className="text_regular_12_o7">
            if you are able to stake in a farm with your new LP tokens,that
            means it's the updated type.Stake as usual and you're done!
          </p>
          <Button
            className="btn-primary"
            style={{ padding: "0.5em 3em", marginTop: "1em" }}
          >
            Go to Farms
          </Button>
        </div>
      </div>
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
