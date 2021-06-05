import React from "react";
import PoolsCard from "../patterns/cards/poolsCard";

//IMPORTING STYLESHEET

import "../styles/screens/poolsScreen.scss";

const PoolsScreen = () => {
  const renderScreen = <div className="pools_screen">PoolsScreen</div>;
  return (
    <>
      {renderScreen}
      <PoolsCard variant="card" />
      <PoolsCard />
    </>
  );
};

export default PoolsScreen;
